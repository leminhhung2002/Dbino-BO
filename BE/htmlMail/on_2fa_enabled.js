const html = (nameNick, linkLogo, linkFooter, titleSite, titleSub, contact) => {
  let body = `      <div style="margin:0;padding:0;background-color:#02102c;font-family:'Open Sans',sans-serif;font-size:14px;color:#ffffff;font-weight:400">
   <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse">
    <tbody><tr>
      <td align="center" style="padding-top:20px;padding-bottom:20px">
        <img src="${linkLogo}" class="CToWUd" data-bit="iit">
      </td>
    </tr>
    <tr>
      <td>
	    <div style="background-color:#34d1d6;padding-left:30px;padding-right:30px;padding-top:10px;padding-bottom:10px;color:#fffffe;border-radius:10px 10px;margin-bottom:10px">
		  <div style="font-size:20px;font-weight:bold">
		    Enable Google Authentication
		  </div>
		  </div>
      </td>
    </tr>
    <tr>
      <td>
	    <div style="padding-top:20px;padding-bottom:25px;padding-left:30px;padding-right:30px;border-radius:10px 10px;border-top:none;background:#06173f url(https://didi.azureedge.net/chart-email.png) no-repeat center bottom">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
            <tbody><tr>
              <td style="padding-top:5px;padding-bottom:15px;">
                Dear <span style="color:#34d1d6;font-weight:bold;font-size:16px">${nameNick}</span>
              </td>
            </tr>
            <tr>
              <td style="padding-top:5px;padding-bottom:5px">
                Your account at <span style="color:#34d1d6"><a style="color:#34d1d6" href="${titleSite}">${titleSite}</a></span> has been enabled Google Authentication.
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-top:10px;padding-bottom:10px">
                <a onclick="alert('Login again into your account')" style="text-align:center;padding:0 20px;line-height:50px;overflow:hidden;border-radius:5px;text-decoration:none;background-color:#34d1d6;color:#fffffe;font-size:16px;margin-bottom:10px;display:inline-block;font-weight:bold" target="_blank">Login Now</a>
              </td>
            </tr>
            <tr>
              <td style="padding-top:5px;padding-bottom:5px">
                If this was not your own activity, please contact us immediately via email: <a href="mailto:${contact}" style="text-decoration:none;color:#34d1d6" target="_blank">${contact}</a>
              </td>
            </tr>
            <tr>
              <td style="padding-top:25px;padding-bottom:5px">
                Best regards,
              </td>
            </tr>
            <tr>
              <td style="padding-top:5px;padding-bottom:5px">
                <span style="color:#34d1d6"><span class="il">${titleSite}</span></span> Team
              </td>
            </tr>
          </tbody></table>
		</div>
    </td>
    </tr>
    <tr>
      <td align="center" style="padding-top:25px;padding-bottom:5px;font-weight:normal;color:#ffffff">
        Copyright ?? <script>document.write(new Date().getFullYear())</script> ${titleSite}. All Rights Reserved.
      </td>
    </tr>
   </tbody></table>
  <img src="https://u22773861.ct.sendgrid.net/wf/open?upn=4qw7DcbnVU7gsPGuPRvXeDcQQBKlKp183RQ-2Fa97tOU4U7UCF-2F-2BGWXgYmMkOXY4faudBsheJFB0muH1W-2BMi8I9ZjCEwU1EWraod716q5XGFzYyPnbs2HBkbvhx1iuGTEi2ktoLYmh9YfY09VA4aLOhfGZjMnmFNi-2B32RjX-2FLdhh-2FFg4nxnqprgNQnbyhNTPS35kgMXVRMgfpSckA2VEnFKoMaLMPLs2qa64BXHZmSh00-3D" alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important" class="CToWUd" data-bit="iit"></div>
<style>
  * {
    color: #fff;
  }
</style>`;
  return body;
};

module.exports = {
  html2FAEnabled: html,
};
