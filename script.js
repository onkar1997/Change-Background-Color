const btn = document.getElementById('btn')

btn.addEventListener('click', changeBackgroundColor)


function changeBackgroundColor() {
	document.body.style.backgroundColor = generateRandomColor()
}

const generateRandomColor = () => {
	const values = '0123456789ABCDEF'
	let color = '#'

	for (let i=0; i<6; i++) {
		color += values[Math.floor(Math.random() * 16)]
	}

	return color;
}