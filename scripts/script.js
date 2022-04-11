


async function getAdvice() {
    const api_url = "https://api.adviceslip.com/advice"
    const response = await window.fetch(api_url, {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'omit'
    });
    const data = await response.json();
    const { advice, id } = data.slip
    document.getElementById('quote').textContent = advice; 
    document.getElementById('quote_id').textContent = "Advice #"+ id;
}
getAdvice();



