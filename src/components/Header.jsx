function Header(props) {
    return(
        <div>
        <h1 className="md:text-5xl sm:text-4xl text-2xl md:py-2 text-center p-3">{props.title}</h1>
        </div>
    );
}

export default Header