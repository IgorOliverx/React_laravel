import './../../css/cssSubcomponents/ThreeDCard.css'; 
import DownloadApp from './Dowload';

const ThreeDCard = () => {
  return (
    <div className="three-d-card">
      <div className="card-wrapper">
        <div className="card-face front">
          <div className="card-content">
            <div className="card-description">

            <div className="app-download">
                      <h3>Baixe nosso aplicativo!</h3>
                      <div className="download-qr-code">
                          <img src="../assets/img/qrcode.png" alt="App" />
                      </div>
                  </div>

            </div>
          </div>
        </div>
        <div className="card-face back">
          <div className="card-content">
            <div className="card-description">
                <DownloadApp/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCard;
