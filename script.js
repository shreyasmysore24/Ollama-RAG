async function handleSubmit() {
    const url = document.getElementById('urlInput').value;
    const question = document.getElementById('questionInput').value;
    const answerContainer = document.getElementById('answerContainer');
    const errorContainer = document.getElementById('errorContainer');
    const loading = document.getElementById('loading');

    // Clear previous results
    answerContainer.style.display = 'none';
    errorContainer.style.display = 'none';
    loading.style.display = 'flex';

    try {
        const response = await fetch('http://localhost:5000/api/rag', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: url,
                question: question
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Something went wrong');
        }

        document.getElementById('answerText').textContent = data.answer;
        answerContainer.style.display = 'block';
    } catch (error) {
        errorContainer.textContent = error.message;
        errorContainer.style.display = 'block';
    } finally {
        loading.style.display = 'none';
    }
}