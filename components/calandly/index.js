import Script from "next/script";
import React, { useState, useEffect } from "react";
function Calendly() {
  return (
    <section className="calendly-wrap" id="calendly">
      <h1 className="calendly-h">Book a FREE Strategy Session</h1>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/outboundleads"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </section>
  );
}

export default Calendly;
