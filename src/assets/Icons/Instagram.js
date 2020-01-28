import React from "react";

const SvgInstagram = props => (
  <svg width={30} height={30} {...props}>
    <defs>
      <clipPath id="Instagram_svg__a">
        <path fill="none" d="M0 0h30v30H0z" />
      </clipPath>
      <pattern
        id="Instagram_svg__b"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
      >
        <image
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfhCQ4SGyx4T6eiAAA4sUlEQVR42u2dd3xX1fn43xlkMo0MFZQlUxkCKsOFilbFrdSB2FrRTqz122r7/eGu1n5ttWrrarUucKG1DmSKgsWyh4CADHEAAkIgIeuTz++PJCSBhOST3Oc8dzzv+3phCukzzr3Pc88595znJGF4QQrZZNGULLLIJIN0Mvb9mUETUskghTSakFL+UxIZQApNgDRSgAwA0kneJ7NJ+U9J5f92IE1IqbeNGSTV8zfjFNRbaoziWv6lgHj5T8XEyn8qpbD83yBG0b5/KyBOETEKiFFc/lMJxRRQQAGF+/7cSz757CGfvH0yjUZQ30cimiTRnEM4hGa0oBnNaUommWTTlEyyyaIZGWSTTVOyrCWdU8pu8sljL3vII48CdpPPHnaxh1x2s4vdfMcOdu1LRMYB2GNbQQ5HcATtOYw2tKUNbcihFanaZhmNJsZ3bONbtrCVrXzNV3zJV2zXNssfRDcBZNCVbnShEx3pyFFkaRtkOGUvG1nPBjawltV8zl5tg3SIVgLI5hh604ve9KTDvrG2YZSyiVV8Wn7t0TbHHVFIAM0YyECOZQDdE5gyM6JKnPUsYAHzmE+utjHShDkBdORkTuEEetq73mgQpaziE+YymxXapkgRxgTQmTM4g5Npq22IERq28CEfMiN8iSBMCaAZwzmPs2mvbYgRWjbxPtOYyg5tQ7wiHAmgEyO5kGH7Fs4YhiTFzOYd3uRzbUMaT9ATQFcuZxR9tM0wIskSJvFasIcFwU0AbbmKazlW2wwj8izlJV5ik7YZDSOICSCL8xnNWfZJz/ANpXzAP5kUvBUEQUsAQ7meS2iqbYZh1MAeJvF3PtQ2IxGCkwBaMobr6a1thmHUwXIe5QXytM2oH8FIAL34CWPsvW8Eht28yGMs1zajbvyfAIZzM+cEwE7DqE6c6fyZ9/y9GdnPgZXCJdxGP20zDKMRLOaPTKRU24za8GsCSOVKfkMvbTMMwwPWcC8vUqJtRk34MQEkcyl3003bDMPwkPWM5yX/9QT8lwDO5Q8212+EkuX8ln9rG1EdfyWAgfyB4dpGGIYgs/gVC7SNqMQ/O+Vb8xSfWPgbIecU5vFPDtc2owJ/LKdNZRyvM8Rn/RHDkCCJvoyliHl+mBHwQ8gdz2MM1DbCMByzlBv5j7YR2kOAbB7mPxb+RgTpw2we0V7fqtsDOJWn6KrbAIahykauY7qeer0eQAYPM8PC34g4RzGVR8jUUq/VA+jP8/a13zDKWc0oFmso1vgKkMRNvMxhGu4ahi/J4YfkM9e9Yvc9gJb8nYvdO2oYvudf/NB1vWHXCaAfb9DRsU7DCAobuISFLhW6nQQcw8cW/oZRKx2ZzQ9cKnQ3B5DCn7nfKvcbxkFpwgXkMNXVKkFXQ4AWvMxZjnQZRtCZxmXsdKHITQLowtv0cKLJMMLBar7HOnk1LuYABjHHwt8wEqIbcxkkr0Y+AZzLDDun1zASpjUzOU9aifQk4Ghe0lvmaBiBJo3L2cgSSRWyCWAcj/uk4oBhBJFkLmC35ApByfC8nft9UW/AMIJLEmeRxAdS4uUSwD2MF5NtGFHiVDKZJiNaKgE8wK1izWEYUWMYzZgiIVgmATzA/4g2h2FEjSG04H3vxUokgLu5Tbw5DCNqDCbD+9pB3ieA223sbxgiDCPOLG9Fej1LfxN/dtYcfiRGHvnkUUABBRTu+7OYAmIUUUSs/KdiYkCMIgBKyk+OKyIGQCFxIE4BAKX7fqs4AVsKPPQrI4HfTSt/raSVLzPLIAlIIh2AFNIASCW1ym+n0IQ0UsgghbTyn5qQQQbp+/7MJItssiL+YfkmHvZSnLcJYDTPqtcZlqCQ7ewkl1x2s4t88thLAXnsYS/55LGbAvLIYw/5/j4MOhQk04xsssikKdlkk0EzssmmOdlk0YJmNKc5LckpTznhIs61POedOC8TwHm8UZ7Vg0spW9nEJr7kG7awmS1sYzt52mYZDSKbHA6lHW1py2F0oD1H0ibwa1NKuIi3vRLmXWMMYibZKg3SOOJ8yWesYjWfs571nnacDf+RSUc604Vu9KA7RwQyHeRxGvO8EeWV+12YE6gtPyWsZgFLWcwCvtM2xlCjKf0YwDH059jyuYlgsJXB3mwW9iYBtGBuQDb8bmMOs5jNkvJpNcMoI52+DGUwJ9FO25R6sYrBbkqG1E0Kk4n7/NrFa1xHN+2mMnxPEt35ERPZrv7M1nW975cZt4fVm+Jg1yLu5WS/NJURGFIYzD0sUX9+D3b9RbuRAMaoN0Nt16eMp6d28xgBpwu3Ml/9Wa7t+qF28xxHvnojHHht5B6O1m4aI0QczR2sVX+uD7zyGaDZLIewXr0Jql+FTGR4KBcjGdokcxrPsVf9Ga9+raeVXpNMUne/6vUF4+3EQUOYQ/kNn6s/61WvN7XWMoxTd73ymsdFEV8jbrgjhQuZo/7MV143aTRCPwrVHY8Tp5QpnKr9RBgR5FTeplT9+Y8Tp4D+rp3P5FN1t+PEmclA7efAiDADeU89BuLE+dR17e1H1F2OM59ztO+/YXAG89RjIc4jLl0+Tb3rs41rArmNwwgjSVzFV8oRUcpprtzNZp2qqzEe1/z0YRg10IKHKVGNi89d7cb9i6qby2zUb/iUASxTjQ1PawXVxiDFPBfjz3bQmOFj0vmDanwcL+1gKovU3NvAcO37axh1cgob1WJkofS2t1+quTaZHO07axj1Iod31OLkZknH2rFTxakY99j6fiNAJDOemEqs7JSszPUPFZd2M1L7fhpGwpxHrkq8/F3KoYEqOe1r+mnfScNoEP34UiFiYlJbhGcoOLOMjtp30TAaTHsWK0TNTAlXzlNw5AOaa99Bw2gUzZmuEDnneu1GssISh8n2zd8IAZm86zx2lno9aX6lcxcmhfJgJyOKpPGq8/i50ksHUlnt2PwJNNG+a4bhGam85DiCPvNySdAYx8YH/4xBw6hOKq87jqJrvDI9mVVODX8vUIc0GUb9SHO8PnClV/MA33dq9gyytO+UYYiQyUynsXS5N2YvcmjyEvvwZ4SY5ix1GE0LvTD5TIcGf0V77TtkGKJ0cLo68PTGG+zu4M9cW/RrRIC+7HIWU5Mba2xvZ9X/Yt6vXjIMXzLS2a6aUno1ztS/OctVd2rfFcNwxl3O4upvjTGzJbsdmTnZ9vsbESLZ2dB6Dy0bbuY4R0au5xDtO2IYTslxVjjsFw030s3pPzFO0b4bhuGcUx3NBCxvqIEnOcpQD2jfCcNQ4UFHETasdhMOdrrOs4xx0AjLGESh65Y3jP1ow1G0phlpxMhjO5v4kpiwzgzm09uBb//k2sT/T9lOJgBLpMoXGUY9yGAE9zGTHTU8m3tZyONcSWtB/W5O2djdkDODrnbSOXF6pKFh7COZk3m6XlWuY0xnDE2F7HjMSZxdnbhhUxyY9Q0tVB8CI5o04dqEK1zs4j7aCdjSii0OIu39RM063EnX5CrtJ8GIHElc3eAPcHncL3AA5zUOIq2EwxMz6n8cGDXPDvg2HNOz0SU6v+Bij21KYr6DaLslMaNcbFr0YKeSYSTAWPI9eXKf9bhmhYsdt0sSMaiHA4OmaD8NRqTI4gUPn94VdPfUumkOIq5H/c35f+LGlNrnP8MhrZjt8RP8radHcQ9ysOv2d/U3Z4m4Me9pPxFGhGgn8kTv4QwPbXxfPOYW1deUzuKmxG31v+GM5iwUeor3cKJnVg53EHWd6mfKTeKGfKz9TBiRIV20EOc2D+cC5orH3bj6GSJ/COiF2k+FERkeEX6Wl3v2ReAi8bibXh8zWlAkbMZ6UrSfCiMiXOxgcu0fHtmaIl4hoOjAmtsH1uE5Q/xQrifEd1kZBkBbnnaw2OwHHi0NivGEsKVN6jNt+ZRwFiqkjbCbhlHGP8Xf/mXXRo+2CrWlQNjSeqSYTcImvKj9VBgRYZizitZx7vPI5gniqaoOuos31Wnaz4UREeQnsyuvPI+qBsh/DOxaXWHyAQbIspFZwhoMA2CI01dNFr/0RM4HfCFs6X4Rvn8CkG605ykV1mAYAP/jWN9PPNkoXMrzwnbW8YqXLk5wtLB7hgHQWvxj9oFXA6ru1EA3YSu/qa6ueg+gu/AM/ULWiMo3jDKuEP+YfSCjPZGyuv5r9htEu+qzANUTwFBR1fCasHzDKGOUgs7TyfFEjnSUVCsSnlz7PwlgCcBwQStOUNCawpmeyHlV2M6DJADZZltiAwDDCUOVFpt7s8d1TWLVexKmWpRXTQDNE6kZ0gDeEZVuGBUMUtLrVYkQ2UjpSbPK/1E1AQwUPqHXioAYbuijpLeXRz0P2UhJqVqNq2rIy+bNncwVlW8YFXRR0pvBEZ7ImctOUTurRHrVBNBPVOk0SkTlG0YF7dU0d/BESglTRa3sV/lj1QTQX1RpwmeTGEaDSKWlmm5vPgQiXDO7X+WPlQmgqfAqvY9EpRtGBRmKB854dW6QbLR0r6xiVJkAjhGdAtzKalGXDKOCVEXdXn1+/IytolbuO5S8MuhlzymfQ1xUvmFUUBwK3XNE7awhAfQSVThbVLphVJKvON28yzNJsoOAfdHuqgdgMwCGK+J8q6bbO82yr8waegA9BdUVs1TUHcOoinRRjdqps+RWvVlKkaCd+6K9YsIkU/Tb6QoKBaUb9SOLHFrSkuZkkUUG6ZTd/xKgkALyySeXnexkO/naxjaKz1Q2A8F2tnkmq5CV9BWz9EjSy2KyIgF0Ff0GsFhQtlEz6XSiK53pQAfa0462CVWu3cMWNvMlm/iC9axlnej7yGtkN9PUjrf93MWCCSCFLqyAygQguwZgsah0o4JUetCPY+hFLzo26pNUU5pWW1AbYwMrWMFyFrHK9+c6/EdJr7dH3i1mjKCtR1dPAF0bIapuZGucGJ05kRM4nr5kCmlIoQtdGAnAXpbwX+byCeu0Ha+F+eQeeAaOA2Z6Km2xqK37RfxfBauQlSouzQw33biRCXzlvPpdxfUlL3GjL+s8vqbQGjtJ99SHVqLnGjxaXdl7gqo2aT8NoaMZF/Mk69QC/8BE8AwXV91lro78QZsHXk977sWXgta+XV3VSkFVsjubokUbbuB98QOkGnYVMJmfebQhtrGksc25/97UA6rKdEFrl1dXlS+o6hHtpyEUtGMcs4mph3ldV4yP+AXttJuLPzn2+zOBLUiPCdq7p6qiHNGm+bn2sxBwsrmGKZSoh3YiVwlTGF2550yBIxz3k64V8GGcqMWtKhX1FVV0ruJjEHRO5Al2qIdzQ69c/qG0JAfgCYeerhc5h2CkqM3HVio6R1SR5CLj8NKUsSxQD2EvrmXc4Nk++UQ4glxnPl4p4kFvUZvPrlQ0VlBNKRkKNz/YdOSPAX7v13Tt5EGOct6Ov3Tk3XQh+zNFPwReV6lovKCazc5ve7AZwCsBG+/X9ypmIsc5bctUJ32oPMFy+pJndf4vVOwGbCt4E/R2ZgWPYbzNPC5TOtZCmlRGsYAp4kfQV1LC98kV1zKOVWKyJdfQtAEXCcCWAdWP4UznI85VrGfnhjOZzixOdaRtDWOFNbwgsACoEsnoaQsVCUDyTOAvBWWHhROYxnSHb0ZtTmYmMx2d3/My4wWlzxZOMJLR4ygBfNN4EaGmG5P4D6drm+GcU/mE153sI7ibvwlJXsZI9oraLhk9VYYAXlUzr4ktgrKDTg5/YTkXhb7bXzNJXMxyHhJ9+sr4mUgKWMiZwif4IDqFvq/dk0Rnnb8n3ERBJYUb2K4+M++Hawc/dzDt+TuPP6lNd7Lh+FzBdi+qePG0FL29bj/8BIWhLFYPPD9dixgi3uaj2OWRtaU8RJqT52SAaKuXp7DOokqOdNJQQaIVjwdgU4/rq5QnxetGdGK+B5Zu52Jnz8pRom3esUyJbJbRWATqZy5is3qw+fX6hkuEWz+VmxrVDyjlWVo7fFqaibZ3+WmgpwmqkJ0jDRqteVU9yPx+vcJhwnfhcB5r4E7BWQ4GKvtTKNjW5RUMLhBU8ZXzBvMvF7NVPbyCcG3lIvF7cRgPJlQypJBJCsEP8I1gS5fVeORqQRWfqjSa/2jOP9QDK0jXcw4KjKVyDq/WOSAo5kN+IbpS5uCsEGzlq8qqAkt+zpBfiR0EjmcCnbWNCBSjGcIVzBPVUcK7vEsTBjCYvnTnSFqX7+ovZSebWMsy/svHHp731xAkI6h5WQKQzLWWAJK4hXtFykWEmy7M5nc8iPSp0sXMZW75z0lkkEERBT46+UAygpqVrQSUnKePegJoyZs8YOHfINL4I29WLVwlTpy9fEeej8JfNoKyyxKAZOW23YKy/U9/5nO+thGB5nwW0E/bCFUcJADJHsCexosILKOYXe14LaMhdGKOUMGtYJAnKNtBAgj2KbMNJ5n7maBaFTc8ZPEifxQ9vNbPSCaALPkEIGm+f8lmEr+J6B4/GW7hVbFzD/2Ngx6A5Hsqij2A9nzIBdpGhI6LmeF0Ea5fkIwgB0OA6PUAevOR7YAU4UT+K1h+06/YECBQnMyHFXusDM/pyMecpG2EY6wHECDOZTKHaBsRaloxpWIFe0Rw0AOwOQBvuIo3IjpR5ZIMJkXqs2DAPwNGpwfwQ56zFX9OSOX5qqfahBwbAgSCG3gqsl+q3ZPMk/xY2whHiA8BUkgXVBGNIcCN/M3C3ynJPMb12kY4QTIBZJCcLFyyKwo9gB/wmC36cU4Sj3O1thEOkHyFJpFlCaCxXMXT9vZXIZlnHNQO0kY2grItATSOkTxj4a9GKhOqnnIfSsQTgORHwBiFouZrczITbeZflXQmhXxpkGxxEuEeQLjf/7150/b7qZPJW/TSNkIUyVmArGQyAmq6Nu15z2m1GqM2WvIeh2sbIYjod4BU0QQQ3h5AU96ig7YRDSLOLraxnQKK2UsRkEYmTcggh0NpEcjvGUfyNieF9mmTfI1mpIquAigQlK1JMi9WnKoSALayjM9YzwY2sIntlBzkd1PJoQMd6UgnutMnMBtw+/MCl1CqbYYIklEk3AMIawK4PwCV/nYwl49YyNKEjpguYQtbmL/vf7ejD/0ZxDDaajtUBxfye27VNkIEyShKl00A4fwGcAW3aJtwEHbzAe8wi888Kai9mc1MAZLowcmczghaaDtYK79mCRO0jRDAegC+oj9P+XScvIHXeJ8PKRKQHWclK3mCJhzPBVzOUdrO1kAST7OSxdpmeI7ka9TmABKkFa/78Lzjr3iFScwRP0QDipnDHH7DcVzJKI7Qdnw/sniNgezUNsNjRIcAsp8Bw5YAkniGTtpGVKOEfzOSo7iZ2Q7Cv4I4C/gVR3EWr1Os3QTV6MJzPu2fNRzRHoBsAgjbHMAtvir2uY07OYrzeVvpJJsYU7iUjtye0DSjNCP5lbYJHiPcA5BcyhquHsAg7tE2YR+r+TFHcQdfaxvC19xFJ8b66BzoexmkbYKnSEZRmmwCCFMPoDkTSdM2AoAVXE4PHvfROssCnqIPl7NC2xAA0njJweHi7pCMoiayCcBf48PG8bAvDvhew2iO5VWH4/36UsqrHMuVrNE2BOjKX7RN8BDJKGqSLPpWC08CuJBrtU3gO35Jb17w8Xq3UibQi1+wQ9sQrg1RpQDhBGA9gLppy5PKFsR4gu48FIAWLeERuvLIQRccu+BJ2mg3hUdI3nPhOQD/P6714xHlNfGLOIEb+Va7GerNd/yCQVUWFGtwKI9qN4NHWA9AmUu5TFH7Xm7jeBZoN0LCLGYwv1KdqLyMS7QbwRMsAajSUvVNMpc+3K/enW4YJfyJfnyiaMEjtNRuBA+QWNpdgQ0B6uR+tX1wJdzLSazVboBGsYZh3K6WwA7jPu0G8ADJ1rMeQB0MVas+v5FT+N+AvvurUsJdnMYXStrHcqJ2AzQayR5Ak2RSAmq6C1J4TKnm7zQG8bG2+54xm+OYrqI5mcdEn3AXSL5GU5JJFRSvs0bdO26gr4LWOH/kewGa868P2zmL+1SWLx3HWG3nG4lkFKXI9gD8u2SlPuSorP0v4Ap+HYKu//7E+C1XqSwOvzvgR7ZLPguWAA7CeIWqv9s4g5e1HRdjAmew3bnWHMZrO94oJKPIEkCtdFM4f3YNQ5ij7bgosxnM5861/piu2o43ggD3AII8B3C/8zN/lnGyL7bSyLKGk1juWGdaoD8H2hyAAidwoWONCxjuq8IacnzDqcxzrPMSBmq73WBsCKDAvY4LS33M6WzTdtoZ2znT8UfOJO7VdrrBBHgIENQEcBqnO9W3kHPYpe20U3ZxjuPNQiM4WdvpBiI5BEi1dQA1cbtTbcsZEbHwB9jF2SxzqtHtXfUOGwI45hROcahtLSMUPo35ge2McLrTYXhADxIXHgJILnUNZgL4nUNd2zmHb7QdVmMz5zqd+XB5Z71Dsh+dbAlgfwZwpjNdBVwQgQ9/B2M1FzmsHT2CftoONwBLAE75tTNNcX4Q8mU/9WE2P3C2RyApkMeHSrZOcrLo567gTQJ25GJnuh5gora7vmAif3Sm61Jfnmp4cCRfo0nWA6jOz0S/ilRlekBHpBL8lmmONKXwU21nE0a4B2AJoJKmXOdI00auCGD/SIoYV7DJka4f+fBw14MjGUU2BKjGlY5qyMW4KmT7/RvLNmcJsRVXaTubIJI9ABsCVMPV/r97bfLvAObwe0eabtR2NUEC3AMIVgI40dFHorncre2qL7nLUQXh/hyv7WpCWA/AEW7G//mMDmG9Hy8o4WpH5wi4munxBuEegCWAMrIZ5UTP7QEv9C3JWu50omcUWdquJkCA1wEEKQFc4uRI6YU8pO2or/kTCx1oaeFwtUfjCfA6gCB9BRjtQEcJ11n3/6CUcL2Tp+ZqbUcTwCYBHXAYpznQ8iSLtR31PQudnMR8utp5T4ljC4EccLmD4yN2BLw6rStuZ6e4jlTVA18TQ3gIYD0AgMsd6Lgrovv+E+Vb7nCgxcUd9wbhHkBQTfeSwx2cILeav2q7GRj+6uBLyVDaabtZT0SjyBIAwEUOTgC8KwRHpbqimLvEdSQ7r/vsS2SHAEHhAnENK5ig7WSgeIlV4jrk77o3CK8ENJo5qBd7R4DmQ/xAzEEJz9Noqu2mPrI9gGAMAUaQLqxhFa9pOxk4XmO1sIZ0ztB2Uh/rAcDZ4hr+HJBU6CdK+ZO4Dvk77wXCQwCbA5AuArqV57VdDCT/FK+Z4K78q2+xrwDdxKvE/ZW92k4GkgLxD6ed6aLtpDI2CchwYfklPKXtYmB5UnznhNsj4BqG8DqAqE8CSp8C9C5fa7sYWL7mPWENQT0v0CusByD+CNj7vzFIt14QEkCAVwL6n84cLir/K/F3WLiR7j91oKO2i6oIfwXw/xBAeg/Ay4GqieA/YrwirEF+F4iviXoP4ARh+dKPb/ixBBDgSUD/I5sANvBfbQcDz1w2isqXfgX4G+FJQL8PAVLpIyr/Nd+3gP+JCy+j7uOgFExjW0CQaPcAepApKv9tbQdDwTui0rPoru2gJtGeA+gvKj2Xj7UdDAVz2C0qv5+2g4pEfAjQW1T6NCsB4glFzBCVf4y2g3VgQwAxeolKf1/bvdAwWVS67FPgbyK+ElD21n+o7V5okG1J2X5g4wlwD8DfQ4B00VVg2/hM28HQsJIdgtI7kabtoBqR7gF0Ev0A9LHP01+QiItOp6ZEeTlwlCcBu4pKty8AXjJHVLq/qwJYRSAhOotKd3HIZXRYJCrd3wlAlCgPAY4Ulb5U271QIduaHbTd0yPKQwDJ276VLdruhYpvROsDyr4KGosNAYRoLyjb3v9es1xQtuST4HOiPASQPBvOPgF6jWSL+vuUQFsHIITkCfEbtJ0LHesFZbfRdk6NCK8DyCZbUPoGbfdCxwZB2c2Fd4X6mOhOAuaISt+g7V7okOwBwCHa7h0EmwQUoaWo9E3a7oUO2RZtpe2eFtEdArQUlB1nu7Z7oWO76JuwpbZ7B8F6ACI0F5S9U/xEm+hRTK6gdMmnwddEdw5ActrH3v8SbBOUnaXtnBbRHQJI3nJLABJIbgn2cwII8BAgqj2AAm3nQonkGcv2GTByNBGUXajtXCiRbNVUbecOQoB7AH5GshhIkbZzoUSyVf2cAESJ7iSgJYCgIdkD8PvhIFJEeCmwYRjCPQA/Dy8kT+2NbpFJSdIFZUf1DOd4sq+76ZJYAggakgkgsgu3ojsEkDy1R/JRjS6SadXPCUD0Q71sD8DPQwD7qhw0JFtV8mnwNdHtAeQLyvbz5tLgIrmBW/JpaCzCPYCgmt5YJHP+odrOhZKoJgBRojsJuEtQdovoLiwRo4nojj3JnYa+JrpDgJ2CspOE6w1FkRzR/uR32u4dhABPAvqZnaLSI3zUhBCyLbpT2z0tojsHILtlt6O2e6Gjk6h0P2/gDvAkoJ/JZ4+gdNnHNYp0FJSdG90N3NFdB4Do4V0dtZ0LHZIpNbrHuEW4BwCbBWV313YudEi2qL8TgOhrNLqTgPCloOw+2s6FjmMFZUe4iHt0JwHhC0HZrX1+3lzQOFx0cZW/E4BNAgoh2QOwPoC3SL7/ZV8FPifKQ4B1otKP03YvVMi2puyT4GuiPARYKyp9iLZ7oWKoqPTPtd07KDYEEGK9aFGQIT5Pf0EiicGC0mPCB4/6migPAQpFz/DNoYe2g6Ghl+gG63WixWH8TYS3AwOsEJV+srZ7oeEkUemyT0HjsXUAYsje+rO03QsNZ4tK93sCkCTiPYDlotJPFz19KDqkMVxUvuxT0HiEewBRZpGo9ObCc9dRYRjNROXLPgX+JsL1AABWCReDPFfbwVAg24r5rNZ2UJNoDwFiLBGVf5nvW8D/JHGpqPwlvj8UxCYBBflEVPpRnKDtYOAZzJGi8mWfAL8T6YVAIH/7R2k7GHguF5Y/V9vBOglwD8D/HWDpBHBZZM+d9YZULhPW4P8EIErUewDr+EpU/hF8T9vFQHMOh4vK38RGbRdVifwQAD4Uln+9toOB5kfC8mdpO1gPbAggivQjIP0OCzPy/Sfp9O93rAfADGH5qYzVdjGwjBU/YWm6tov1IMArAYPQA1gjuicQ4Cd2WnCDyOQnwhrWRbkUCBD5lYBlTBWW35prtF0MJNeKH7I6RdtFfWwIAJPFNfzS2jlhkrlJXMd72k7WiwCfDRiEIQBMoVBYQ3fh5axh5DK6CWsoCMQMgDD2ZoI9fCCu4w5bEJQQKdwhrmMmedpu6mNzAABviWvoyRXaTgaKqxwUVPuXtpP1JMBFQYMxBIA3KBXXMd7Kg9SbNMaL64jxprabfsASAMA3fCyu42h+qu1mYPgZXcR1zPH5iYCVBHglYHBmGF51oGO8+GetcNCa/+dAyyvabtYbyQRQmiza+Q1OAniFEnEdrbhL281AcA8txXWUOEn53iAZRcKfAYOTADYz04GW6xmg7ajvGcB1DrRMY6u2o/UmwD2AIH36et6BjlSeEl/dHmxSedrJU/OCtqMJIPkaLbUeQAWvk+tAS39u1nbU1/yKfg607OINbUcTQHgIYHMAZeTzshM9d3C0tqu+pRu3O9EzkXxtVxMgwEOAICUA+LsTLZk8b8OAGknlOUf7Jt3caa+wIYAjPmGhEz0nOHrPBY07HNVQXsg8bVcTQngloPUAKnnckZ7bhI+7DCLDuNWRJld32SsC3AMI0lcAgAnsdKInhRdore2sr2jDBEdPyw5e0nY2QawH4Iw9PO1I05FMtJmAfaQwkfaOdD0duD2Awj0ASwBVedTBisAyhvN7bWd9w32c5khTCY9pO5swwl8BbAhQlY287kzXLVyp7a4vuIJbnOl6lS+03U0YWwfglAecVUhI4h82GcjJPONs12icP2i72wBsHYBTFooXCa0knTfFC1/5m+5MIt2ZtsnCp0HLINmPtgRQA/c41HUI73KYtsNqtONdchzqC+asi3ACkDwdPZgJ4CMnOwMr6MLUiH4SPJTpdHaobzqztV1uEJJfi2LJorPewZsELMPtvv3eTKaFtsvOacFkejnVeKe2yw1E8jUasx5ATXzANKf6juM9B0Uw/EQL3nNcG+F9PtJ2uoFIvkZLLAHUzG8dV0sezPQIFQzLYSqDnWqM8zttpxuM8BDAEkBNzHO+Y/w4ZtFO220nHMYsBjnW+RoLtN1uMAEeAgR1DgDgVooca+zFbAfV8LXpxmx6O9ZZxG+13W4EklFkPYBaWcPfnOvswhxO0XZclJP42OnMfxmPslbb8UZgQwAl7maHc52HMDnEZwhdxVSn3/3L2OZ0ZYf3BHgIEOwEsJ3/VdCawYs8GMKdgin8gecdrvqr5Hd8p+18o7B1AGo8yWIFrUnczPshWxzUhqn8WuWkqAXOtnhLEeA5gDRB2S6I8VMHpwbWxHAWMEzbfc84mQXONvxWp1TtDnqH5JmSsWSKA2q6Gz7mSSXNHZjFfSFowVTuZIazch/78wSfaDdAo5F8jRZbAqiL29ispDmZW/k44EXEuzGH8WpDwa8D/fmvAskosgRQJzv5saL2gSzhtoC2Yyr/wyKOV7Tg545qPMoiefeLLAHUzZuqJ8lm8nvmB/BMwYHM5QGyFC2YyCTtRvAE6wGo83PloyT78AlPBmihcA6PMlc5aX3LL7SbwSMsAaizleuVLUjhelZySwC+qzRhHGv5qfon4LF8q90UHiE8BJBc8R6WBABv8Yy2CbTkj6xgjI8XCaUwmpU85IOtzX/nTW0TPMN6AL5gnC/Wk3fhWZYxyodrLJP5Pst5ji7ahgBruEnbBA8JcALQWPgpxW6ucL4/sGZ6MJFV/FR1gq06mdzAcib4ZC9jEVeyR9sID5GMomLZIUCGoGz3zPdRUYmjeZQN3MER2oZwBHeykcfpqW3IPm5lvrYJniIZRUXJFAqKD1MPAOBBX40sW3M7G3iHS5RmBVIYyWusZ7yv9i28yUPaJniMZAIoTKUgoKZrEOcH9FHYz147qZzDOXzNq7zGHIdHmhzH1VzO4druH8BarnVczE0eyddoQapoDyBsCQB2cjFzyNY2Yz8OZxzj2MhrTOYj0TvahMFcwKUcqe1yjeRzKbu0jfAcySgqsB5AoizhOiaobGyti6P4Fb8ijxm8xyxWevomTKInJzOcET4uYB7nB4E8+acuAjwECNscQBkv05/faBtRK9mMZCSQy1w+YCFL+aYR0g7nWPpzIsMUKvkkyn2qS7blEB4CWA8gcX5LFy7VNqIOmjOCEQBsYxmr2MB6NrCJbQctAdOEHDrQiY50ojvHBqhU+Ssq9ZtcINwDsDmAxCnlGg5niLYZ9eRQTqtSjiPOLraznQKKKKAISCODNDLIIYcWvhzc1M3HjAnd5F8FAZ4D8NtkmXfs5UL+44tVb4mSREtaBtLy2lnLBaLPsS6SUVSQLNpw/lmr5j3fcg7btI0wgO2cG+o7IRlFBcnkCYoPbw8AYDUXka9tROTJ5wJWaxshimQCyJNNACkh/Q5QwWwu8cn+gKhSyEXM0TZClAzRjdX5ycLvsHD3AWAy14jWVTYORjHfZ4q2EcLIRpBwDyD8CQBe5keBLzwdTGKM8dXeDBksAfieZ7kxtJ+g/EucG5mgbYQDJGcA4uQnExNdCRDm7wCVPMV1NhBwSoyxgT/xp36IfgSkNBnsO4AHPMPVoqVVjKqUMCYi4S8bQfllx3daAvCCiVwq2pcyKijgUl7UNsIZoh8ByxKA5HeAaAwByniL84RnVAzI50L+pW2EQyRfoXnWA/CWaZzNDm0jQs0ORvC+thFOsSFAoJjNUDZoGxFaNjAk5Mt+DsTBEMASgJesYigLtI0IJXMZxGfaRjjHQQ/A5gC85WtOCcmpdH7idYaHestPbVgPIIDkcRn32+Igz4hzH5exV9sMFQI+CRjFHgBAKbfxffsm4An5XMFvI5tOA54AmgrK9juvMJQ12kYEnvUM5mVtIxQJ+BxAM0HZ/mcJg2w2oFH8iwEs1TZCleaCsh30ACTNDwK7uJRbrGZAgyjiZi7iO20zlHGQAHYLqoh2DwAgzoMMCXnNGgnWM4w/R3bkX4lkAthdlgByBVX49xgJlyxgIE/Zw5wAz9CHedpG+ALJBJArnwBaCsoOErsZy4Vs0TYjEHzLxfwwVAd8N4ZWgrJz5YcA/j9Pxh1vcSwvaRvhe17hWN7QNsJHHCIo20EPID2iS4Fq5luu4qJGHdUVbr7mEkZZP6kKzUgTlF6eAGT3r1kfoDpv0pPHrIrgAZTyBL3to+l+yEbPDhcJIDiny7liFz9jGPO1zfAVSxjCjezUNsN3yEbPdxVDgJJGi6qdtqIuBJX/cAI38K22Gb5gOz9jAJ9om+FLJKOnuGIIEBddbNFOUHaQKeVJevBgxBcJFfMwR/OYlVStBcno2QFlCQC2C6qxHkDt7OAWevNaRFcIxHmVntwU+bV+B0MyeqokgK2Cag4TlB0G1nIZx/OuthnOmcogLudzbTN8jmT0bAEXCaCDoOywMJ9zOYVp2mY4YxYnM8LqJtUDyejZChUJQPLLqyWA+vEhZzKMd0I+HIgzleGcykfahgQEyehx1ANoLyg7bMzhPPoyUfSrjB4lTGAgI5ipbUiAkIyeKj0AybVpbcgQlB4+lnEFXfiD6MSse3bxIF24koXahgSKLFoLSq8S9d8jLnj11G7HQJLN9cwXvS+ursX8yBaEN4jeovflrEpFfUQVnavdjgHmeB5nh3oIN/TK5QkGaTdhgBkpeneOqVSUI6ro59rtGHCyuJrJFKuHcyJXMe9xNZnaTRdwxoneo2objfMEFT2i3Y6hoA0/40Ni6qFd11XCLH5KG+3mCgV/FbxP+9VbWCGoaqp2O4aI1tzAe+xVD/Oarr28y884QruJQsQMwbu1vLqqdwVVbdJux9CRzYU8whr1kK+4PudxLrCJPs/5SvCevV2mIrVc1QZBN46gpW309JQ83uRNoAunM5hT6KRkx1fMZjozbEGvCIeILgReX/YfFwkgib7MEpQfXT7nc54EOnIiJ3AifZycxJTPEj5hLnPZqN0AoaYvSYLSN5T9pyIBrBV1pZ8lAFE2sIGJQArd6ccx9KI3nUjxUEOMdaxgBctZxGrbvOuEfqLSyyO+IgHI1q2XdcWoIMYKVpT/nEZHutKJI+lAB9rRJqEC07lsZTOb2MQXrONz1lOs7Vzk6CcqvfzQuopORgZ55cuCJVhiKcAHZHIIrWhJc7LIIoMMyl4AJUABBeSTTy47+Y4dET2J118s5Vgx2TGyKQSqjDI2cJSYumKaRrzyjWEkRjq7aSImfT2dy36ofOuvFHSmCX0FpRtG+OgnGP5Vor0yAXwq6s4wUemGETZkI2ZftFcmgBUNEuQPdwwjbDhPALI9gKGi0g0jXCQJR0wN0Z5Niehy0W7abWoYgaGnaCyWVO7TrOwB5FV8GRTiJO02NYzAIBstn1V+5q367X+RqNKzGi/CMCKCbLQsrvzRXQI4Y9+qQ8MwDkYTTheVv7jyx6oJQPa4ylacICrfMMLCYFqIyp9X+WP1BCC7yeN7otINIyycLSo9VvVVXzUB7GaVqOLzRKUbRliQjZSVVcuBVd8AJHtEc1+OFpVvGGGgu+AmINgvyqsngNnCrl0qLN8wgo90lBwkyrsJ146z4yANoy4WC0dh14Mp3yys3AYBhnEwugtH4NfV1e1fBORDYfeu0W5fw/A1o4Xl7xfh+yeAGeLuydUdMoygk8TVwhrqiHDpWYA4w7Xb2DB8y3Dx+NtvBmD/9/Fq8WM8rtduY8PwLdcJy/9i//rfB3bI3xc24WLaCmswjGDSlkuENUze/y+S6/4Vj0njR8IaDCOYXEe6sIZ6RHcLioRHIRs8PbLCMMJBChuEI6/owLMhDuwB7BJfD3gUF2i3tWH4jvMFC/OX8RG5+/9VTR/l/iXu6q/FNRhG0PiNuIa36vdrncQ/RcQ5VbetDcNnnOYg6up9ivQScVOkpxoNI1hMFo+5xTWprXld3qvi7o5gkGpzG4afGMQIcR2v1f9XezjojkxXbG7D8BfTHERcj0QMkh8ExB3kPMMIAmc6iLalNauubWvOCw7cvq/K2cSGEVWSuN+BlgQj+nDhc4LKLtscbBijHURajPaJmjXFgVmbaand+oahSgvxIjxx4kytTX3tu/Ofc+B8W36v0eaG4Rt+72Rz3POJ/1+y2e2ka2KfA43oMtDJUHsPTRti3LMOTIuznAztu2AYKmSw3EmMNeD9DzDEiXFx/qR9HwxDhQcdRdjQhhq4yIl5MSsTZkSQU4k5ia8lDTdxrKMMtZFDte+GYTglh42OouuGhhuZzU5HRk61IiFGhEh2sPmn7NrZsAnACv7iyMw492jfE8Nwxt3O4uqRxhnak1JHhpZyvvZdMQwnjHQ0+o9TSs/GGvues1yVS3/tO2MY4vRll7OY8qDuxhnOjI3zNR20745hiNKBLx1G1BlemLzQocHLDqxbahihoTlLHUbTIm+MHuXQ5DgfkKV9lwxDhExmOo2lUd6Yncwqp2ZPJk37ThmG56TxjtM4WuXdp/UxTg2P8wap2nfLMDwlldcdR9G1Xhq/2rHxE2iifccMwzNSeclxBH3m7Uv0Ssfmx5kkfk6aYbghjUnO4+dKb11Idjp7WXZNJlP7zhlGo8l0uJam4lp6kFI/DeRc507E+cA+ChoBpwUzFCLnXAlXpis4soyO2nfQMBpMeycF9ve/Zsg4M8DZCuaq19f0076LhtEg+jtd9VdxxRgg5dDfFdyJs5uR2nfSMBLmfHJV4uXvci615TsVl2Lc4/2khmGIkcydKv3lODtpI+nYTSpOxYkzmRztu2oY9eJQJ6dq1Hz9Uta1VEd1Amu6NljtQCMAnMoXajGyUH4NrZtK5jVfMf5sawMMH5PB/yl1/cvi43gXTj6s5mCcOMsYqH2XDaNGBjmq81/b9bAbN7P4XNXNGI/TSvteG0Y1WvIXxb5xnDhryXbl7KnOKgXWdm3jGjtc3PAJSYzhG+WIiHGqS5fdVQuu/ZrPOdp33jA4kwXqsRDnIbdOZ/Cpustx4sy0GQFDkeOZph4DceIsdz853pdCdbfjxCllitvOj2EAMJy31YfCZVeBznL5ceqOV17zuNDOFjIckcLFzFF/5iuvcVoN4b7MwcGuLxjPYdrPhhFy2nKr8lew/a839KbDW7Je3f3qVyETGW77BgwBkhnO8xSoP+PVr3W6n8SPI1+9CQ68vuQ+umk/L0aI6MZdrFN/rg+88vRP07pGvRFquz5lPL20m8cIOF24lfnqz3Jt12jt5gF4SL0ZDnYt5T7OsJMGjARJYTD3qNTzqf/laOlv3U3l6qzzhl+5vMVYetjqQaMOkujOj5jIdvVntq5rshc7/7wJiBb8p/HHEDthB3OZyUcsplDbFMNXpNOXoZzASRyubUq9WMkQdjZejFdvxM7MoZ1meyRICatZxBIWsZAd2sYYajSlHwM4hv4cG6hh4lZOZL0XgrzrEg/kA3e7kTxlC5+xihWsYx3r2KttjiFKJp3pTGc60ZNuHBXIQeEehjPPG1Feun9eCM70i/Mtm9jEl3zDFjazme1sZ7e2WUaDaEYOObSjHW05jPZ0oAOtAxnyVSnmQt71Spi3jTGaZ0O5CKeI7ewkl1xy2UU+eeylgDz2sJd88thNAXnksYd84trGhp5kmpFNFpk0JZtsMmhGNtk0J5ssWtCc5jSnJTmB6tTXl1Ku5XnvxHmdDce53pboM2LklyeIQgoopKD8zyIKiVFICcX7fiqB8nVlhUCMIij/W4BCSst/KqWoiobKv6+bogR+t3aSEwiklGq/m7bvdZC876THVFKBNFKAdJJIIqP8b9NJIZ0m+35KI4N0Msr/TCeTbLLIiviej1/wiJfivO8OjedOZ41hGNFiPHd7K9D7bDqLVE521ByGESXu43avRUp0p2aSzVAHzWEYUeJBfuO9UJnx1FRLAYbhKQ9yi4RYqQmVqTSxgYBheMTvuVVGsNyM6gxidpKPYXjAHYyXEi35SeVDtnF24JddGIYmpdzEA3LiZb+pzmMt50f8u61hNJwSfsiTkgrk38/n8DJNxbUYRvjIYxTvyKpw0UE/jndp60CPYYSJLZzHfGklLlbuL2QIKx3oMYzwsJLB8uHvJgHAOk5kshNNhhEGpjLEm/3+deFqgq6QibTgREfaDCPI/IUx5LtR5W6GPs5k1nEWTZxpNIzgsZex3O/JLs564forfV/epKNjnYYRFNZzKQtdKnRdvmMJ/ZnkWKdhBIN/MdBt+LscAlRQwCvsYHjgi4cZhpcUcgs3u69IqbVQ91he4hgl3YbhN1ZwFYs1FGst093KMzTjBNspYESeUh7hcr7UUa4bgKfwNF1VLTAMXTbyQ2boqdfdqLORf9CUgaGsJGwYdRHjMS7hM00T/NAFP57HGKhthGE4ZgnXe3W8R8Pxw1bdr3iGnZxIhrYhhuGIXG7jOq1xf1X8kACglLk8RSv6+6JHYhiSlPIcFzLNH0fI+CvgBvIHKyNmhJpZ3Ox6sc/B8Nf023xO52yWa5thGCIsZSSn+in8/ZYAAN6nD6NYrW2GYXjKWkbTn7e1zdgffw0BKknlKn5NL20zDMMD1nAPL+079dFX+DUBAKRwCbfRT9sMw2gEC/k/Xna3vTdR/JwAyhjOzZwTADsNozpxpvF/TPXHbH9tBCOwuvMTRtNK2wzDqCd7eJFHgzCdHYwEANCUq7iB/tpmGEYdfMqT/JNd2mbUj+AkgDIG82MuJlvbDMOogT1M4nmm+7vTX52gJQCAbC5iNKf7ZBWjYUApH/BPJrFH25BECWICKKMtVzOGY7XNMCLPEibwEpu0zWgYwU0AZXTlMkbRV9sMI5IsZhKvs0LbjMYQ9ARQRgcu4gJOspLjhhOK+Yh/828+1zak8YQjAZTRjFMYydkcqW2IEVo2MoWpTGeHtiFeEaYEUEFnzmA4p9BO2xAjNGxmFh/wYbC7+zURxgRQQUeGchon0NO+FxgNIsZK5vIJs1mlbYoUYU4AFTRjAAPpQz962CyBUScx1rOI+cxjPru1jZEmCgmgkix6l189ONL6BcY+YnzBSj5lBZ/yqauDOf1AtBJAVdLpwtF0pRMd6UhHW10YMfLYwAY2sJ61rOFzCrUN0iG6CWB/WtGeIziCw2hDW9rShkPIsQPMQkAxO9jBVrawha18w1d8xZd8p22WP7AEcHCacwitaEFzmtGCpmSSSTZNySSbLJqRQTbZNCXLWtI5Rewlnzz2soc88ihgN/nsJpc97GI3u8jlO3aQq22on7HH1huSySaLbLLJIoMMMkiv8t9U0mlCCpmk0IQ0UkkH0kgBMoAkMoCU8inKJvv6Han7fkohrVbdafUs7JZMej29KaxnAYtSimr9tyJi5T+V7KuFU0IxAMXEgALixCkEYhQBhZRQRDElFBCjmEJKKKCQgvKr7Kd88sgjnzz/FtkIEv8f2QoHc6C1z+AAAAAuelRYdGRhdGU6Y3JlYXRlAAB42jMyMDTXNbDUNTQJMbSwMjK3MjbXNjCwMjAAAEJ8BRwHsxmAAAAALnpUWHRkYXRlOm1vZGlmeQAAeNozMjA01zWw1DU0CTG0sDIytzI21zYwsDIwAABCfAUcLoyxCAAAAABJRU5ErkJggg=="
        />
      </pattern>
    </defs>
    <g
      stroke="rgba(0,0,0,0)"
      fill="url(#Instagram_svg__b)"
      clipPath="url(#Instagram_svg__a)"
    >
      <path stroke="none" d="M0 0h30v30H0z" />
      <path fill="none" d="M.5.5h29v29H.5z" />
    </g>
  </svg>
);

export default SvgInstagram;
