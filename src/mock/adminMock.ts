import { http, HttpResponse, passthrough } from 'msw';
import mockReports from './mockReports.json';
import mockUsers from './mockUsers.json';
import mockAllUsers from './mockAllUser.json';
import { BannerItem } from '../models/admin/banner';

const mockBanners: BannerItem[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/300/100?random=1',
    visible: true,
    always: false,
    startDate: '2024-01-01',
    endDate: '2024-01-31',
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/300/100?random=2',
    visible: false,
    always: true,
    startDate: '',
    endDate: '',
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/300/100?random=3',
    visible: true,
    always: false,
    startDate: '2024-02-01',
    endDate: '2024-02-28',
  },
];

const uploadedImages = new Map<number, string>();

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const reportsAll = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}reports`,
  () => {
    return HttpResponse.json(mockReports, { status: 200 });
  }
);

export const userAllPreview = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}users/preview`,
  () => {
    return HttpResponse.json(mockUsers, { status: 200 });
  }
);

export const userAll = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}users`,
  () => {
    return HttpResponse.json(mockAllUsers, { status: 200 });
  }
);

export const getBannerList = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}banner`,
  () => {
    console.log('배너 리스트 조회:', mockBanners);

    const bannersWithUploadedImages = mockBanners.map((banner) => ({
      ...banner,
      imageUrl: uploadedImages.get(banner.id) || banner.imageUrl,
    }));

    return HttpResponse.json(
      {
        status: 200,
        message: '배너 리스트 조회 성공',
        data: bannersWithUploadedImages,
      },
      { status: 200 }
    );
  }
);

export const postBanner = http.post(
  `${import.meta.env.VITE_APP_API_BASE_URL}banner`,
  async ({ request }) => {
    const formData = await request.formData();
    const imageFile = formData.get('imageUrl') as File;

    console.log('배너 생성 요청:', {
      imageFile: imageFile
        ? {
            name: imageFile.name,
            size: imageFile.size,
            type: imageFile.type,
          }
        : null,
      visible: formData.get('visible'),
      always: formData.get('always'),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
    });

    let imageUrl = '';

    if (imageFile && imageFile.size > 0) {
      try {
        imageUrl = await fileToBase64(imageFile);
        console.log('이미지 변환 완료 - 크기:', imageFile.size, 'bytes');
      } catch (error) {
        console.error('이미지 변환 실패:', error);
        imageUrl = 'https://picsum.photos/300/100?random=' + Date.now();
      }
    } else {
      imageUrl = 'https://picsum.photos/300/100?random=' + Date.now();
    }

    const newBanner: BannerItem = {
      id: Date.now(),
      imageUrl,
      visible: formData.get('visible') === 'true',
      always: formData.get('always') === 'true',
      startDate: (formData.get('startDate') as string) || '',
      endDate: (formData.get('endDate') as string) || '',
    };

    mockBanners.push(newBanner);
    console.log('배너 생성 완료:', {
      ...newBanner,
      imageUrl: imageUrl.substring(0, 50) + '...',
    });

    return HttpResponse.json(
      {
        status: 200,
        message: '배너 생성 성공',
        data: newBanner,
      },
      { status: 200 }
    );
  }
);

export const patchBanner = http.patch(
  `${import.meta.env.VITE_APP_API_BASE_URL}banner/:id`,
  async ({ request, params }) => {
    const bannerId = parseInt(params.id as string);
    const formData = await request.formData();
    const imageFile = formData.get('imageUrl') as File;

    console.log('배너 수정 요청:', {
      bannerId,
      imageFile: imageFile
        ? {
            name: imageFile.name,
            size: imageFile.size,
            type: imageFile.type,
          }
        : null,
      visible: formData.get('visible'),
      always: formData.get('always'),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
    });

    const bannerIndex = mockBanners.findIndex(
      (banner) => banner.id === bannerId
    );
    if (bannerIndex === -1) {
      return HttpResponse.json(
        { status: 404, message: '배너를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    let imageUrl = mockBanners[bannerIndex].imageUrl;
    if (imageFile && imageFile.size > 0) {
      try {
        imageUrl = await fileToBase64(imageFile);
        console.log('배너 이미지 수정 완료 - 크기:', imageFile.size, 'bytes');
      } catch (error) {
        console.error('이미지 변환 실패:', error);
      }
    }

    mockBanners[bannerIndex] = {
      ...mockBanners[bannerIndex],
      imageUrl,
      visible: formData.get('visible') === 'true',
      always: formData.get('always') === 'true',
      startDate: (formData.get('startDate') as string) || '',
      endDate: (formData.get('endDate') as string) || '',
    };

    console.log('🎯 [Mock] 배너 수정 완료:', {
      ...mockBanners[bannerIndex],
      imageUrl: imageUrl.substring(0, 50) + '...',
    });

    return HttpResponse.json(
      {
        status: 200,
        message: '배너 수정 성공',
        data: mockBanners[bannerIndex],
      },
      { status: 200 }
    );
  }
);

export const deleteBanner = http.delete(
  `${import.meta.env.VITE_APP_API_BASE_URL}banner/:id`,
  ({ params }) => {
    const bannerId = parseInt(params.id as string);

    console.log('배너 삭제 요청:', bannerId);

    const bannerIndex = mockBanners.findIndex(
      (banner) => banner.id === bannerId
    );
    if (bannerIndex === -1) {
      return HttpResponse.json(
        { status: 404, message: '배너를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    const deletedBanner = mockBanners.splice(bannerIndex, 1)[0];

    uploadedImages.delete(bannerId);

    console.log('배너 삭제 완료:', deletedBanner);

    return HttpResponse.json(
      {
        status: 200,
        message: '배너 삭제 성공',
        data: deletedBanner,
      },
      { status: 200 }
    );
  }
);

export const passthroughAllGet = http.get(`*`, () => {
  return passthrough();
});

export const passthroughAllPost = http.post(`*`, () => {
  return passthrough();
});
