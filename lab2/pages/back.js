export default function back({ api }) {
    return (
        <button onClick={api}>Call API</button>
        
    );
}

  async function api() {
    try {
        const res = await fetch("http://127.0.0.1:3000/api/hello");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการเรียก API:', error);
    }
}
