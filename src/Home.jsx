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
              <span className="currency-label">PESOS ARGENTINOS</span>

              <h1>Fabiana Sofran</h1>
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
                onClick={() => copiar("martin.garcia.ars", "alias-pesos")}
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
              <span className="currency-label">DÓLARES ESTADOUNIDENSES</span>

              <h1>Martín García</h1>
            </div>

            <div className="currency-icon usd-icon">US$</div>
          </div>

          <div className="separator"></div>

          {/* CBU */}

          <div className="bank-info">
            <span className="info-label">CBU</span>

            <div className="info-row">
              <span className="bank-value">0070099400000022510567</span>

              <button
                className="copy-btn white-copy"
                onClick={() => copiar("0070099400000022510567", "cbu-dolares")}
              >
                {copiado === "cbu-dolares" ? "✓ Copiado" : "▣ Copiar"}
              </button>
            </div>
          </div>

          {/* ALIAS */}

          <div className="bank-info">
            <span className="info-label">ALIAS</span>

            <div className="info-row">
              <span className="bank-value">martin.garcia.usd</span>

              <button
                className="copy-btn white-copy"
                onClick={() => copiar("martin.garcia.usd", "alias-dolares")}
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
