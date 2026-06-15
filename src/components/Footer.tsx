function ScrollButton() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="footer">
      <input onClick={scrollToTop} type="button" value="scroll to top" />
    </div>
  );
}

export default ScrollButton;
