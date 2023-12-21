function Button({ customClass, name }) {
	return (
		<button className={`${customClass} min-w-min btn shadow-xl`}>{name}</button>
	);
}

export default Button;
