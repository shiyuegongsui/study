# HTTP 有以下安全性问题：

1、使用明文进行通信，内容可能会被窃听；
2、不验证通信方的身份，通信方的身份有可能遭遇伪装；
3、无法证明报文的完整性，报文有可能遭篡改。

HTTPS可以理解为 HTTP+SSL/TLS， 即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL，用于安全的 HTTP 数据传输。
HTTPS 并不是新协议，而是让 HTTP 先和 SSL（Secure Sockets Layer）通信，再由 SSL 和 TCP 通信。也就是说 HTTPS 使用了隧道进行通信。
