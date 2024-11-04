const HeaderBox = ({ type = "title", title, subtext, user}: HeaderBoxProps) => {
  return (
    <div className="header_box">
        <h1 className="header_box_title">
            {title}
            {type === 'greeting' && (
                <span className="text-bankGradient">
                    &nbsp;{user}
                </span>
            )}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox
