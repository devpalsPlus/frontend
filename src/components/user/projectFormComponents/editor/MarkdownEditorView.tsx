import MDEditor from '@uiw/react-md-editor';

interface MarkdownEditorViewProps {
  description: string;
}

const MarkdownEditorView = ({ description }: MarkdownEditorViewProps) => {
  return <MDEditor.Markdown source={description} />;
};

export default MarkdownEditorView;
