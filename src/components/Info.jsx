function Info({ customTitle, customDesc, title, description }) {
	return (
		<>
			<h1 className={`${customTitle} md:text-5xl font-medium`}>{title}</h1>
			<p className={`${customDesc} opacity-60`}>{description}</p>
		</>
	);
}

export default Info;
