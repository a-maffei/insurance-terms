type ButtonType = {
  areTermsFiltered: boolean;
};

export default function BackButton({ areTermsFiltered }: ButtonType) {
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!areTermsFiltered && (
        <button
          className="p-btn--primary back-button"
          onClick={handleBackToTop}
        >
          Back to top
        </button>
      )}
    </>
  );
}
