/**
 * AI Assistant for Esther Ifra Breslev Books
 * "Conseiller Breslev"
 */

class BreslevAdvisor {
  constructor() {
    this.init();
    this.recommendations = {
      "tristesse": {
        title: "Likutey Moharan",
        message: "Rabbi Nachman enseigne que la joie est le remède à tout. Le Likutey Moharan vous ouvrira les portes de l'espoir."
      },
      "conseil": {
        title: "Likutey Etsot",
        message: "Pour des conseils pratiques sur chaque aspect de la vie, consultez le Likutey Etsot."
      },
      "histoire": {
        title: "Sipoure Maassiot",
        message: "Les contes de Rabbi Nachman réveillent l'âme de son sommeil."
      }
    };
  }

  init() {
    console.log("Breslev Advisor initialized.");
    // In a real implementation, this would insert a chat widget or listen for events
    this.createWidget();
  }

  createWidget() {
    const widget = document.createElement('div');
    widget.id = 'breslev-advisor-widget';
    widget.innerHTML = `
      <div class="advisor-icon">🧠</div>
      <div class="advisor-content" style="display:none;">
        <h4>Conseiller Breslev</h4>
        <p>Comment vous sentez-vous aujourd'hui ?</p>
        <div class="advisor-options">
          <button onclick="window.breslevAdvisor.ask('tristesse')">Triste</button>
          <button onclick="window.breslevAdvisor.ask('conseil')">Besoin de conseil</button>
          <button onclick="window.breslevAdvisor.ask('histoire')">Envie d'une histoire</button>
        </div>
        <div id="advisor-response"></div>
      </div>
    `;

    // Basic styles injected for demo
    const style = document.createElement('style');
    style.textContent = `
      #breslev-advisor-widget {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 1000;
        max-width: 300px;
      }
      .advisor-icon {
        font-size: 24px;
        cursor: pointer;
        text-align: right;
      }
      .advisor-options button {
        margin: 5px;
        padding: 5px 10px;
        cursor: pointer;
      }
      #advisor-response {
        margin-top: 10px;
        font-style: italic;
        color: #1a237e;
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(widget);

    widget.querySelector('.advisor-icon').addEventListener('click', () => {
      const content = widget.querySelector('.advisor-content');
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  }

  ask(mood) {
    const responseDiv = document.getElementById('advisor-response');
    const rec = this.recommendations[mood];

    if (rec) {
      responseDiv.innerHTML = `<strong>${rec.title}</strong>: ${rec.message}`;
    } else {
      responseDiv.innerText = "Je cherche encore la meilleure recommandation...";
    }
  }
}

// Initialize
window.breslevAdvisor = new BreslevAdvisor();
