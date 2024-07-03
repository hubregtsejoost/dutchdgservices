function Header(props) {
    return(
        <div>
        <h1 className="md:text-6xl sm:text-5xl text-3xl md:py-6 text-center p-3">{props.title}</h1>
        </div>
    );
}

export default Header