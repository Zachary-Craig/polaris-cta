import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PolarisCta extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--polaris-cta-background-color);
    }

    .card {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      border: 3px solid black;
      padding: 50px;
      text-align: center;
      margin-bottom: 20px;
      max-width: 500px;
}

.subscribe-text {  
      margin-bottom: 0px;
      margin-right: 65px;
      font-size: 18px;
      color: solid black;
      font-weight: bold;
}

.subscribe-button {
      height: 60px;
      width: 200px;
      background-color: white;
      color: #1260CC;
      border: 2px solid blue;
      border-color: #1260CC;
      cursor: pointer;
      font-size: 24px;
      font-weight: bold;
      font-style: italic;
      transition: color 0.3s,             background-color 0.3s;
}

.subscribe-button:hover {
      color: white;
      background-color: #1260CC;
}

.card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
}

.card::before,
    .card::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: #1E407C;
    }

    .card::before {
      top: 0;
    }

    .card::after {
      bottom: 0;
    }
.card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 15px;
      background-color: #1E407C;
}

.card:nth-child(2) .subscribe-button {
      background-color: #1260CC;
      color: white;
      border: 2px solid #1260CC;
}

.card:nth-child(2) .subscribe-button:hover {
       background-color: white;
       color: #1260CC;
}

.card:nth-child(3) {
            background-color: #ccc;
}

.card:nth-child(3) .subscribe-button {
            background-color: grey;
            color: #9ACBF7;
            border: 2px solid grey;
}

.card:nth-child(3) .subscribe-button:hover {
            background-color: #9ACBF7;
            color: grey;
}

.card:nth-child(4) {
            background-color: #001F3F;
            color: white;
}

.card:nth-child(4) .subscribe-button {
            background-color: #001F3F;
            color: #9ACBF7;
            border: 2px solid white;
}

.card:nth-child(4) .subscribe-button:hover,
.card:nth-child(4) .subscribe-button:focus {
            background-color: #001F3F;
            color: white;
}


.card:nth-child(5) {
            background-color: #001F3F;
            color: white;
}

.card:nth-child(5) .subscribe-button {
            background-color: #9ACBF7;
            color: #001F3F;
            border: 2px solid #9ACBF7;
}

.card:nth-child(5) .subscribe-button:hover {
            background-color: #001F3F;
            color: #9ACBF7;
}
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
      <div class="wrapper">
    <div class="card">
        <div class="subscribe-text">GET THE NEWS BY EMAIL</div>
        <button class="subscribe-button" onclick="redirectToLink()">
            <slot name="button-text">SUBSCRIBE ></slot>
        </button>
    </div>

   <div class="card">
    <div class="subscribe-text">GET THE NEWS BY EMAIL</div>
    <button class="subscribe-button" onclick="redirectToLink()">
        <slot name="button-text">SUBSCRIBE ></slot>
    </button>
</div>

    <div class="card">
    <div class="subscribe-text">GET THE NEWS BY EMAIL</div>
    <button class="subscribe-button" onclick="redirectToLink()">
        <slot name="button-text">SUBSCRIBE ></slot>
    </button>
</div>
    
  <div class="card">
    <div class="subscribe-text">GET THE NEWS BY EMAIL</div>
    <button class="subscribe-button" onclick="redirectToLink()">
        <slot name="button-text">SUBSCRIBE ></slot>
    </button>
</div>

    <div class="card">
    <div class="subscribe-text">GET THE NEWS BY EMAIL</div>
    <button class="subscribe-button" onclick="redirectToLink()">
        <slot name="button-text">SUBSCRIBE ></slot>
    </button>
</div>
      </main>
    `;
  }
}

customElements.define('polaris-cta', PolarisCta);