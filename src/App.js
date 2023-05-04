import "./App.css";
import { useState } from "react";

const App = () => {
  const [showForm, setShowForm] = useState(true);
  const [showFormm, setShowFormm] = useState(true);
  const [currentCard, setCurrentCard] = useState(1);
  const [currentCardd, setCurrentCardd] = useState(1);
  const [showCard, setShowCard] = useState(true);
  const [Awal, Akhir] = useState(1);
  const pesanWhatsapp = "Makasih Sayang😍😍😍";

  const handleFormSubmit = () => {
    setShowForm(false);
  };

  const handleCardClose = () => {
    setCurrentCard(currentCard + 1);
  };
  const handleCardClosee = () => {
    setCurrentCardd(currentCardd + 1);
  };

  const tdkJujur = () => {
    alert("EH Harus Jujur Jawabnya Sayanggggg!!!!🗿🗿🗿🗿");
  };

  const handleName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name === "Syara" || name === "Syara alul fuadiah" || name === "Nur") {
      setShowFormm(false);
    } else if (name !== "Syara" || name !== "Syara alul fuadiah") {
      alert("EH Kamu Bukan Pacar Aku Kamu Impostor!!!!🗿🗿🗿🗿");
    }
  };

  const handleOptionChange = (event) => {
    event.preventDefault();
    const pil = event.target.option.value;
    if (pil === "Sayang Banget") {
      setShowCard(false);
    } else {
      alert("EH Parah Sih Sayangya Dikit Banget!!!!🗿🗿🗿🗿");
    }
  };

  const openWa = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=6282296831858&text =" +
        pesanWhatsapp,
      "&type=phone_number&app_absent=0"
    );
  };

  return (
    <div>
      <div className="container center">
        <div className="card">
          {showForm ? (
            <form onSubmit={handleFormSubmit}>
              <button className="button" type="submit">
                Click Me❤️
              </button>
            </form>
          ) : (
            <div>
              {currentCard === 1 && (
                <div>
                  <h3>Sayang Aku ada pertanyaan Buat Kamu</h3>
                  <button className="button" onClick={handleCardClose}>
                    Iyah Sayang❤️
                  </button>
                </div>
              )}
              {currentCard === 2 && (
                <div>
                  <h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      class="bi bi-x-square"
                      viewBox="0 0 16 16"
                      className="svg2"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </h3>
                  <p className="word">Harus Jawab Jujur Yah </p>
                  <button className="alert" onClick={tdkJujur}>
                    Nggak
                  </button>
                  <button className="button-1" onClick={handleCardClose}>
                    Iyah Sayang❤️
                  </button>
                </div>
              )}
              {currentCard === 3 && (
                <div>
                  <h3 className="svg">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      class="bi bi-x-square"
                      viewBox="0 0 16 16"
                      className="svg2"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </h3>
                  <p className="word">Awas Ajh Kalau Bohong</p>
                  <button className="button-1" onClick={handleCardClose}>
                    Iyah Sayang Nggak❤️
                  </button>
                </div>
              )}
              {currentCard === 4 && (
                <div>
                  {showFormm ? (
                    <div className="form">
                      <h3>Masukan Nama Kamu</h3>
                      <form onSubmit={handleName}>
                        <input className="input" type="text" name="name" />
                        <button className="button-2" type="submit">
                          Enter
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div>
                      {currentCardd === 1 && (
                        <div>
                          <h3>Hallo Sayang❤️, Kamu Sayang Zulhayad Nggak?</h3>
                          <button className="button" onClick={handleCardClosee}>
                            Iyah Sayang❤️
                          </button>
                        </div>
                      )}
                      {currentCardd === 2 && (
                        <div>
                          {showCard ? (
                            <div>
                              <form onSubmit={handleOptionChange}>
                                <input
                                  type="radio"
                                  name="option"
                                  value="Sayang Banget"
                                  id="sayang1"
                                />
                                  <label for="sayang1">Sayang Banget😍</label>
                                <br></br>
                                <input
                                  type="radio"
                                  name="option"
                                  value="Sayang ajh"
                                  id="sayang2"
                                />
                                  <label for="sayang2">Sayang Ajh😒</label>
                                <br></br>
                                <input
                                  type="radio"
                                  name="option"
                                  value="Ngaaak"
                                  id="sayang3"
                                />
                                  <label for="sayang3">Nggak Sayang😡</label>
                                <br></br>
                                <button className="button-2" type="submit">
                                  Enter
                                </button>
                              </form>
                            </div>
                          ) : (
                            <div>
                              {Awal === 1 && (
                                <div>
                                  <h3>
                                    Iyah Sayang Aku Sayang Kamu Banget Juga😍
                                  </h3>
                                  <button className="button" onClick={openWa}>
                                    Kirim Pap ❤️
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
