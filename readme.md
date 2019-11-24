# Set / Override an HTTP Header

Using IBM DataPower Gateway, sometimes you need to set / add / override some HTTP headers which sent by the client within the request before forwarding the request to the backend endpoint.



## How to use it?

**Using the XSLT:**

Just drag the XSLT to your processing rule (as a transform action), set the header name & value under the 'Advanced' tab and **set the INPUT  & the OUTPUT of this action to NULL**.

---

**Using the GatewayScript:**

Just drag the GatewayScript to your processing rule (as a GatewayScript action), set the header name & value under the 'Advanced' tab (manually add 'HeaderName' & 'HeaderValue' parameters) and **set the INPUT  & the OUTPUT of this action to NULL**.
