import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [copiado, setCopiado] = useState("");

  const copiar = async (texto, tipo) => {
    try {
      await navigator.clipboard.writeText(texto);

      setCopiado(tipo);

      setTimeout(() => {
        setCopiado("");
      }, 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };

  return (
    <div className="Home">
      {/* =========================
          ENCABEZADO
      ========================== */}

      <header className="bank-header">
        <div className="bank-icon">
          <span>▣</span>
        </div>

        <h2>Mis datos bancarios</h2>

        <p>
          Compartí estos datos para recibir transferencias en pesos o dólares.
        </p>
      </header>

      {/* =========================
          TARJETAS
      ========================== */}

      <section className="bank-cards">
        {/* =========================
            PESOS ARGENTINOS
        ========================== */}

        <div className="bank-card pesos-card">
          <div className="card-header">
            <div>
              <span className="currency-label">
                BANCO GALICIA - CUENTA EN PESOS
              </span>

              <h1>Convención Evangélica Bautista Argentina Misiones</h1>
            </div>

            <div className="currency-icon">$</div>
          </div>

          <div className="separator"></div>

          {/* CBU */}

          <div className="bank-info">
            <span className="info-label">CBU</span>

            <div className="info-row">
              <span className="bank-value">0070007820000012614413</span>

              <button
                className="copy-btn green-copy"
                onClick={() => copiar("0070007820000012614413", "cbu-pesos")}
              >
                {copiado === "cbu-pesos" ? "✓ Copiado" : "▣ Copiar"}
              </button>
            </div>
          </div>

          {/* ALIAS */}

          <div className="bank-info">
            <span className="info-label">ALIAS</span>

            <div className="info-row">
              <span className="bank-value">CENTRO.SUELA.LIMITE </span>

              <button
                className="copy-btn green-copy"
                onClick={() => copiar("CENTRO.SUELA.LIMITE", "alias-pesos")}
              >
                {copiado === "alias-pesos" ? "✓ Copiado" : "▣ Copiar"}
              </button>
            </div>
          </div>

          {/* BANCO Y CUENTA */}

          <div className="bank-footer">
            <div className="footer-item">
              <span className="info-label">BANCO / ENTIDAD</span>

              <strong>Banco Nación</strong>
            </div>

            <div className="footer-item">
              <span className="info-label">TIPO DE CUENTA</span>

              <strong>Caja de Ahorro</strong>
            </div>
          </div>
        </div>

        {/* =========================
            DÓLARES
        ========================== */}

        <div className="bank-card dolares-card">
          <div className="card-header">
            <div>
              <span className="currency-label">
                CUENTA BANCARIA DE ARGENTINA EN DÓLARES
              </span>

              <h1>Convención Evangélica Bautista Argentina Misiones</h1>
            </div>

            <div className="currency-icon usd-icon">US$</div>
          </div>

          <div className="separator"></div>

          {/* CBU */}

          <div className="bank-info">
            <span className="info-label">CBU</span>

            <div className="info-row">
              <span className="bank-value"> 0070007831009750095551</span>

              <button
                className="copy-btn white-copy"
                onClick={() => copiar("0070007831009750095551", "cbu-dolares")}
              >
                {copiado === "cbu-dolares" ? "✓ Copiado" : "▣ Copiar"}
              </button>
            </div>
          </div>

          {/* ALIAS */}

          <div className="bank-info">
            <span className="info-label">ALIAS</span>

            <div className="info-row">
              <span className="bank-value">CENTRO.SUELA.LIMITE</span>

              <button
                className="copy-btn white-copy"
                onClick={() => copiar("CENTRO.SUELA.LIMITE", "alias-dolares")}
              >
                {copiado === "alias-dolares" ? "✓ Copiado" : "▣ Copiar"}
              </button>
            </div>
          </div>

          {/* BANCO Y CUENTA */}

          <div className="bank-footer">
            <div className="footer-item">
              <span className="info-label">BANCO / ENTIDAD</span>

              <strong>Banco Nación</strong>
            </div>

            <div className="footer-item">
              <span className="info-label">TIPO DE CUENTA</span>

              <strong>Caja de Ahorro</strong>
            </div>
          </div>
        </div>
        <div className="bank-card dolares-card">
          <div className="card-header">
            <div>
              <span className="currency-label">
                CUENTA BANCARIA EN EE.UU EN DÓLARES
              </span>

              <h1>Fabiana Sofran</h1>
            </div>

            <div className="currency-icon usd-icon">US$</div>
          </div>

          <div className="separator"></div>

          {/* CBU */}

          <div className="bank-info">
            <span className="info-label">CBU</span>

            <div className="info-row">
              <span className="bank-value"> Faltan estos datos</span>

              <button
                className="copy-btn white-copy"
                onClick={() => copiar("0070007831009750095551", "cbu-dolares")}
              >
                {copiado === "cbu-dolares" ? "✓ Copiado" : "▣ Copiar"}
              </button>
            </div>
          </div>

          {/* ALIAS */}

          <div className="bank-info">
            <span className="info-label">ALIAS</span>

            <div className="info-row">
              <span className="bank-value">Faltan estos datos</span>

              <button
                className="copy-btn white-copy"
                onClick={() => copiar("CENTRO.SUELA.LIMITE", "alias-dolares")}
              >
                {copiado === "alias-dolares" ? "✓ Copiado" : "▣ Copiar"}
              </button>
            </div>
          </div>

          {/* BANCO Y CUENTA */}

          <div className="bank-footer">
            <div className="footer-item">
              <span className="info-label">BANCO / ENTIDAD</span>

              <strong>Banco Nación</strong>
            </div>

            <div className="footer-item">
              <span className="info-label">TIPO DE CUENTA</span>

              <strong>Caja de Ahorro</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
