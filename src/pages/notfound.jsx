import { useNavigate, Link } from "react-router-dom";
import "../styles-pages/notfound.module.css"; // adjust path/name to match your project convention

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="nudi-window">
      {/* Fake Nudi Header */}
      <div className="window-header">
        <div className="logo">✒</div>
        <div className="title">ತಪ್ಪು 404 - ಪುಟ ಕಂಡುಬಂದಿಲ್ಲ</div>
      </div>

      <div className="toolbar">
        <button className="tool">📄</button>
        <button className="tool">📁</button>
        <button className="tool">💾</button>
        <button className="tool">🖨️</button>
        <button className="tool">✂️</button>
        <button className="tool">📋</button>
        <button className="tool">↶</button>
        <button className="tool">↷</button>
      </div>

      <main className="error-content">
        <div className="paper">
          <div className="paper-corner"></div>
          <div className="number">404</div>
          <div className="paper-text">ಪುಟ ಕಂಡುಬಂದಿಲ್ಲ</div>
        </div>

        <div className="message">
          <h1>ಅಯ್ಯೋ! ನೀವು ಹುಡುಕಿದ ಪುಟ ಇಲ್ಲಿಗೆ ಸಿಕ್ಕಿಲ್ಲ.</h1>
          <div className="underline"></div>
          <p>
            ನೀವು ಹುಡುಕುತ್ತಿರುವ ಪುಟವನ್ನು ಸ್ಥಳಾಂತರಿಸಿರಬಹುದು,
            ಹೆಸರನ್ನು ಬದಲಾಯಿಸಿರಬಹುದು ಅಥವಾ
            ಅದು ತಾತ್ಕಾಲಿಕವಾಗಿ ಲಭ್ಯವಿಲ್ಲ.
          </p>

          <div className="actions">
            <button onClick={() => navigate(-1)}>← ಹಿಂದೆ ಹೋಗಿ</button>
            <Link to="/" className="home-btn">⌂ ಮುಖ್ಯ ಪುಟಕ್ಕೆ ಹೋಗಿ</Link>
          </div>

          <div className="tip">
            <span>💡</span>
            <p>ಸಲಹೆ: ಮೇಲಿನ ಮೆನು ಅಥವಾ ಹುಡುಕಾಟದ ಮೂಲಕ ಬೇಕಾದ ವಿಷಯವನ್ನು ಪುನಃ ಪ್ರಯತ್ನಿಸಿ.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFound;