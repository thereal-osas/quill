type Props = {};

const PdfRenderer = (props: Props) => {
  return (
    <div className="w-full shadow flex bg-white rounded-md flex-col items-center">
      <div className="h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
        <div className="gap-[1.5] flex items-center">top bar</div>
      </div>
    </div>
  );
};

export default PdfRenderer;
