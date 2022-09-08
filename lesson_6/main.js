function replaceCSSComments(str) {
  return str.replace(/\/\*.*?\*\/\s?/g, "")
}
console.log(replaceCSSComments("код без /*комментарий*/ комментов")) // код без комментов
console.log(replaceCSSComments("код бе/*коммент1*/з ком/* коммент2 */ментов")) // код без комментов
console.log(replaceCSSComments("код /*к1*/ без /* к2 */ коммент/*к3*/ов")) // код без комментов

function replaceHTMLComments(str) {
  return str.replace(/\<\!\-\-*.*?\-\-\>\s*/g, "").trim()
}
console.log(
  replaceHTMLComments("<!--коммент1--> код без комментов <!--коммент2-->")
) // код без комментов
console.log(
  replaceHTMLComments(
    "<!--к1--> код <!-- к2 --><!-- к3 --> без <!-- к4 --> комментов"
  )
) // код без комментов
console.log(replaceHTMLComments("код <!--к1--> без <!-- к2 --> комментов")) // код без комментов

function validateFileType(str) {
  return /.+(\.jpg|\.jpeg|\.png)$/.test(str)
}

console.log(validateFileType("image.png")) // true
console.log(validateFileType("image.html")) // false
console.log(validateFileType("image.file.jpg")) // true
console.log(validateFileType("image.png.file")) // false
console.log(validateFileType("image.png.jpeg")) // true
console.log(validateFileType("image.pngjpeg")) // false

function checkYear(str) {
  return /^(19\d\d|20\d\d|2100)$/.test(str)
}
console.log(checkYear(1900)) // true
console.log(checkYear(2001)) // true
console.log(checkYear(2100)) // true
console.log(checkYear(1899)) // false
console.log(checkYear(20)) // false
console.log(checkYear(200)) // false
console.log(checkYear(20000)) // false
console.log(checkYear("20000")) // false
console.log(checkYear(19)) // false
console.log(checkYear("19")) // false
console.log(checkYear(2101)) // false

function checkEmail(str) {
  return /^[a-zA-z]+\W?[a-zA-z]+@[a-zA-z\.]+\.[a-z]{2,3}$/.test(str)
}
console.log(checkEmail("mail@gmail.com")) // true
console.log(checkEmail("mail.name@mail.ua")) // true
console.log(checkEmail("mail-name@mail.ua")) // true
console.log(checkEmail("mail-name@mail.com.ua")) // true
console.log(checkEmail("mail@gmail")) // false
console.log(checkEmail("mail@gmail-com")) // false
console.log(checkEmail(" mail-name@mail.com.ua")) // false
console.log(checkEmail("mail-name@mail.com.ua ")) // false

function checkDomainUrl(str) {
  return /^(http:|https:)\/\/(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,5}?$/.test(
    str
  )
}
console.log(
  checkDomainUrl("http://external.asd1230-123.asd_internal.asd.gm-_ail.com")
) // true
console.log(checkDomainUrl("http://domain.com")) // true
console.log(checkDomainUrl("https://example.domain.com")) // true
console.log(checkDomainUrl("https://example.domain-hyphen.com")) // true
console.log(checkDomainUrl("http://example.domain-hyphen.com")) // true
console.log(checkDomainUrl("http://www.domain.com")) // true
console.log(checkDomainUrl("http://www.domain.info")) // true
console.log(checkDomainUrl("http://www")) // false
console.log(checkDomainUrl("https://domain")) // false
console.log(checkDomainUrl(" https://domain")) // false
console.log(checkDomainUrl("https://domain.com ")) // false
console.log(checkDomainUrl("example.museum")) // false
console.log(checkDomainUrl("example.domain-hyphen.com")) // false
console.log(checkDomainUrl("www.domain.com")) // false
console.log(checkDomainUrl("www.example.domain-hyphen.com")) // false

function createLinksFromDomains(str) {
  let reg = new RegExp(
    "(http:|https:)\\/\\/(?!:\\/\\/)([a-zA-Z0-9-_]+\\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\\.[a-zA-Z]{2,5}",
    "gi"
  )

  str
    .match(reg)
    .forEach(
      (item) =>
        (str = str.replace(
          item,
          `<a href="${item}" target="_blank">${item.replace(
            /^(http:|https:)\/\//gi,
            ""
          )}</a>`
        ))
    )

  return str
}

console.log(
  createLinksFromDomains(
    "http://site.ua text1 https://site.com text2 https://site.com.ua text3 https://subdomain.my-site.com.ua text4"
  )
)
console.log(
  createLinksFromDomains(
    "site.ua text1 https://site.com text2 https://site.com.ua text3 subdomain.my-site.com.ua text4"
  )
)
