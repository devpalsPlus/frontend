import { Control, useController } from 'react-hook-form';

interface useControllerCommonProps {
  control: Control;
  name: string;
}

interface useControllerApply extends useControllerCommonProps {
  index: number | undefined;
}

export const useControllerCommon = ({
  control,
  name,
}: useControllerCommonProps) => {
  const { field: fieldCommon } = useController({
    control,
    name,
  });

  return {
    fieldCommon,
  };
};

export const useControllerApply = ({
  control,
  name,
  index,
}: useControllerApply) => {
  const { field: fieldApply } = useController({
    control,
    name: `careers.${index}.${name}`,
  });

  return {
    fieldApply,
  };
};

export const useControllerMdEditor = ({
  control,
  name,
}: useControllerCommonProps) => {
  const { field: fieldMdEditor } = useController({
    control,
    name,
  });

  return {
    fieldMdEditor,
  };
};
