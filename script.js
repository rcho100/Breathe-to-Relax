const text = document.getElementById('text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime /5

breatheAnimation()

function breatheAnimation() {
    text.innerText = "Breathe In"

    setTimeout(() => {
        text.innerText = "Hold"
        setTimeout(() => {
            text.innerText = "Breathe out"
        }, holdTime)
    }, breatheTime)
}