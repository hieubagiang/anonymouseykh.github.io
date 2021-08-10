// ==UserScript==
// @name        itest support2
// @description Fetch correct question and answer
// @contributionURL
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @include     http://itest.actvn.edu.vn/*
// @include     http://anonymouseykh.github.io/*
// @include     http://118.70.194.8:8080/*
// @version     1.0.8
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at      document-end
// ==/UserScript==
var data = `Ký hiệu H( ) j e ω biểu diễn:~Đáp ứng biên độ tần số của hệ thống
Để X(ejω) tồn tại, các điểm cực và các điểm không trong mặt phẳng Z cần~Điểm cực phải nằm trong vòng tròn đơn vị và điểm không có thể nằm tùy ý
Hệ thống nào sau đây là hệ thống phản nhân quả~e^n
Tín hiệu nào sau đây là tín hiệu phi nhân quả~3x(n-1)+2x(n-2)+x(n+2)
Công thức nào sau đây là chính xác~x(n)*h(n)= -∞... x(k)h(n k)
Các tín hiệu trong miền tần số ω có tính chất~Tuần hoàn với chu kỳ 2pi
Biến đổi tương đương của dãy ( ) ln W xn N  sang miền tần số rời rạc ωksẽ là dãy~X(k-1)
Công suất trung bình của một tín hiệu x (n) được định nghĩa như sau~ 1 22 1Nx N n NP
Phương trình sai phân tuyến tính mô tả hệ thống rời rạc nào sau đây~Hệ thống tuyến tính
Hệ thống có hàm truyền đạt H(z) = 1 / (4+3z^-1 + 2z^-2 + z^-3 +z^-4) sẽ ổn định đúng hay sai~đúng
Cho tín hiệu x(n) = n a^n u(n) hãy cho biết trường hợp nào sau đây là biến đổi X(z) của nó~tử có a và mũ trừ 1, và |z|>|a|
Tín hiệu : x(n) = u(n-2) – u(n-5) sẽ tương đương với tín hiệu~rect3(n-2)
Tìm H(Z) của hệ thống được mô tả bởi phương trình sai phân sau y(n) +2y(n-1)– 4y(n-2) = x(n) + 2x(n-1)~H(Z)=(1-2Z^(-1))/(1+2Z-4Z^(-2))
Cho hệ thống có H = 1/(1-(1/2)z-1 Điểm cực và điểm không hệ thống là~Điểm không: z = 0 ; điểm cực: z=1/2
﻿Một hệ thống gọi là tuyến tính nếu thoả mãn tính chất sau~a*y1(n)+b*y2(n)
Tìm x(n) biết X(z)= (2z^2-5z)/(z^2-5z+6)~x(n) = 2^n.u(n) + 3^n.u(n) |z|>3
Phép nhân chập chỉ đúng trong hệ thống:~Hệ thống tuyến tính bất biến
Tìm H(Z) của hệ thống được mô tả bởi phương trình sai phân sau y(n) = 3y(n-1) -2y(n-2) + x(n) + x(n-1)~H(z)=(1+z^(-1))/(1-3z^(-1)+2z^(-2))
Một tín hiệu tương tự xa ( )t có tần số cao nhất là Fmax thì sau khi lấy mẫu, xa ()t có thể được phục hồi một cách chính xác từ giá trị các mẫu của nó nếu tốc độ lấy mẫu Fs thỏa mãn~F s ≥ 2Fmax
Hệ thống nào sau đây là hệ thống không đệ quy~y(n) = x(n-1)+3x(n-3) +2x(n-5)
Cho hệ thống TTBB đặc trưng bởi phương trình sau:y(n)=x(n)+1/2.x(n-1)+...+(1/2)^m.x(n-m)+...~Hệ thống này này không nhân quả và không ổn định
Nếu các hệ thống mắc nối tiếp với nhau thì hàm truyền đạt H(Z) của hệ thống tổng quát sẽ bằng~Pi i=1 đến N của Hi(z)
Các phần tử thực hiện hệ thống tuyến tính bất biến là~Bộ cộng;Bộ nhân với hằng số;Bộ trễ
Ký hiệu là ký hiệu của biến đổi Z ngược đúng hay sai~sai
Cho sơ đồ khối như hình 4. 9. Phương trìnhvào ra của hệ thống là:~y(n)= x(n+2) + 2x(n)- x(n-1)
Công suất trung bình của dãy U(n)~Px = 1/2
Xác định phương trình mô tả hệ thống tuyến tính bất biến có sơ đồ ở hình 2.2~y(n)= 3x(n) - 2x(n-1) + 3x(n-3)
Phương trình sai phân tuyến tính hệ số hằng mô tả hệ thống rời rạc nào sau đây~Hệ thống tuyến tính bất biến
Xác định biến đổi z của tín hiệu hữu hạn sau x(n) ={ 1 2 5 7 0 1 }~X(z)=Z-2 + 2z-1 + 5 +7z +z^3
Hệ thống nào sau đây là hệ thống phản nhân quả:~ h(n) = rectN (n+2). U(n)
Tìm hàm truyền của hệ thống LTI nhân quả biết đáp ứng xung của hệ thống là:h(n) ={0, 1, 0, -2, 0, 4, 0}~1-2Z-2 +4Z-4
Xác định biến đổi Z hai phía của tín hiệu sau : x(n) = rect3(n+2) + δ(n+1)~Z2+ 2.Z1+ 1
Khi nào biến đổi Z hai phía trùng với biến đổi Z 1 phía~x(n) là nhân quả
Cho hệ thống tuyến tính bất biến: Biết y(n)=0 với n <0. Tìm h(n)?~h(n) = 0,5^n.u(n).
Công thức nào sau đây đặc trưng cho biến đổi Z của tín hiệu~Xích ma n chạy từ -vô cùng -> vô cùng của x(n).Z mũ -n
Xác định miềm hội tụ biến đổi z một phía của tín hiệu sau: x(n) = u(n) – u(-n-1)~Miền hội tụ |z| > 1
Tín hiệu như thế nào được gọi là tín hiệu lượng tử hoá~Hàm của tín hiệu liên tục là rời rạc
Cho sơ đồ khối như hình 4. 4~y(n)= a[x1(n)+ x2(n)]
Cho hệ thống có sơ đồ như hình 5. 3. Đáp ứng xung của hệ thống theo các đáp ứng xung thành phần là:~ h(n)= h1(n)* [h2(n)* h3(n)+ h4(n)]
Cho các biểu diễn của các dãy x1(n) và x2(n) như hình vẽ. Hãy cho biết quan hệ giữa x1(n) và x2(n)~x2(n) = 2.x1(n)
Một tín hiệu tương tự xa(t) có tần số cao nhất là Fmax thì sau khi lấy mẫu, xa(t) có thể được phục hồi một cách chính xác từ giá trị các mẫu của nó nếu tốc độ lấy mẫu Fs thỏa mãn~Fs >= 2Fmax
Đáp ứng xung h(n) của một hệ thống số được cho bởi sơ đồ sau đây sẽ được tính như thế nào~h(n) = h1(n) * [h2(n) + h3(n)]
Hãy viết phương trình sai phân tuyến tính của hệ thống tuyến tính bất biến có sơ đồ~y(n) = x(n) + x(n - 1) + 0,5.y(n - 1)
Tìm dạng nghiệm riêng của phương trình sai phân sau: y(n) – 4y(n-1) + 4y(n-2) = x(n)~yp(n) = B.n^2.2^n
Cho dãy x(n)=3δ(n+2)+δ(n+1).Biến đổi Z 1 phía của x(n) được xác định~X^1(Z)=Z^(-1)
Phương trình sai phân tuyến tính hệ số hằng biểu diễn hệ thống rời rạc tuyến tính bất biến sẽ có dạng nào sau đây~y n bx n r a y n k = == −− − ∑ ∑ (chuẩn hóa a0=1)
Phần tử Z-1 trong hệ thống rời rạc là phần tử nào sau đây~Phần tử trễ~Tất cả các điểm cực (Pole) zpk của hệ thống phân bố bên trong vòng tròn đơn vị
Hàm truyền đạt H(z) của hệ thống là biến đổi z của đáp ứng xung h(n), đúng hay sai~đúng
Phần tử Z-1 trong hệ thống rời rạc là phần tử nào sau đây:~Phần tử trễ
Tìm y(n) =x(n)*h(n) biết: x(n) = { 0, 1, 2, 3, 4, 0}; h(n) = {1, 3, 2}~{1, 5, 11/, 17, 18, 8}
Trong toạ độ cực ta có thể biểu diễn Z như thế nào~ Z= re mũ j omega
Biến đổi z của tín hiệu xung đơn vị sẽ là~1
Biến đổi z (2 phía) của một tín hiệu x(n) được định nghĩa như sau~X z xnz∞ −=−∞=
Cho tín hiệu x(n) = u(n) . Hãy xác định năng lượng Ex và công suất Px~Ex = ∞, Px = 1/2
Ta có thể tính phép chập tuyến tính hai dãy x1 (n) và x2 (n) có chiều dài L[x1 (n)]=N1 và L[x2 (n)]=N2 thông qua biến đổi DFT nếu ta chọn chiều dài thực hiện biến đổi DFT là~N ≥ N1+ N2-1
Biểu diễn thể hiện phép toán nào sau đây~phép chập tuyến tính
Biến đổi z của a^n x(n) sẽ có dạng~a^-1 z
Trong miền n, dãy dốc đơn vị được định nghĩa như sau~n >= 0 và n ≠
Năng lượng của tín hiệu  sẽ là:~∞
Năng lượng Ex của dãy xung đơn vị δ(n) là~Ex = 1
Nếu bộ lọc số lý tưởng có pha bằng 0 thì quan hệ giữa đáp ứng tần số và đáp ứng biên độ tần số sẽ là~H(e)=H(ejw)
Tương quan chéo giữa tín hiệu x(n) với y(n) (một trong hai tín hiệu phải có năng lượng hữu hạn) được định nghĩa như sau~R (n) x(m).y(m n)
Cho sơ đồ khối như hình 4.3, tìm y(n) biết:x1(n) = {0, 1, 2, 3, 0} ; x2(n) = {0, 1, 1, 1, 0} ; a =2, b=1~y(n) = {0, 0, 1, 3, 5, 0}
Tín hiệu x1(n) như trong hình 2 có mối liên hệ như thế nào với x(n)~Dãy x1(n) là trễ vòng 2 mẫu của dãy x(n)
Công thức nào sau đây là công thức đúng nhất mô tả tính chất tích hai tín hiệu của biến đổi fourier~Nếu x(n) = x1(n) . x2(n).Thì X(ejω) = X1(ejω) * X2(ejω)
Tìm hàm truyền H(z) từ đáp úng xung nhân quả của hệ thống mô tả bởi phương trình hiệu số: y(n)= 0. 9y(n-1) - 0. 5y (n-2) +x(n)+4x(n-1)~H(Z)=(1+4Z^-1)/(1-0.9Z^-1+0.5Z^-3)
Biến đổi Z 1 phía của tín hiệu : x(- n) = 2δ(n+2) +3δ(n) +4δ(n-1)~X(Z) = 3 + 4Z^-1 với Z≠0
Tín hiệu nào dưới đây là tín hiệu công suất~U(n)
Bộ lọc số lý tưởng không thể thực hiện được trong thực tế vì~Đáp ứng xung h(n) của bộ lọc số lý tưởng là không nhân quả
Tích chập chỉ được đặc trưng cho hệ thống nào~Đáp ứng xung của hệ thống tuyến tính bất biến
Nếu các hệ thống mắc song song với nhau thì hàm truyền đạt H(z) của hệ thống tổng quát sẽ bằng~Tổng các hàm truyền đạt của các hệ thống thành phần H(z) = Nii 1H (z)
Tín hiệu rect5(n-3) được biểu diễn~2<=n<=7
Cho sơ đồ khối như hình 4.4, tìm y(n) biết:x1(n) = {0, 1, 2, 3, 0} ; x2(n) = {0, 1, 1, 1, 0} ; a =2~y(n) ={0, 0, 4, 6, 8, 0}
Hệ thống nào sau đây là hệ thống phản nhân quả:~y(n)= x(n+2) + 2x(n)- x(n-1)
﻿Một hệ thống tuyến tính là bất biến nếu thoả mãn tính chất sau~Nếu y(n) là đáp ứng của kích thích x(n) thì y(n-k) là đáp ứng của kích thích x(n-k)
x(n)= rect5(n-2)~x(n) ={0, 0, 1, 1, 1, 1, 1, 0}
Thành phần tương ứng của ( ) 0 x n n cosω khi chuyển sang miền tần số w sẽ là~1/2X(w+wo)+1/2X(w-wo)
Điểm không zor của hệ thống là điểm~Làm cho hàm truyền đạt H(z) bằng không. H clg đấy = 0
Việc ánh xạ tín hiệu từ miền thời gian rời rạc n sang miền tần số liên tục w được thực hiện thông qua biến đổi Z, đúng hay sai~Sai
Chọn phát biểu đúng:~Khai triển Fourier rời rạc thời gian là liên kết thời gian rời rạc với tần số rời rạc
Hãy cho biết cách nào sau đây biểu diễn tổng quát một tín hiệu rời rạc bất kỳ x(n)~x n xn k n
Tìm h(n) của hệ thống được mô tả bởi phương trình sai phân sau y(n) = 3y(n-1) -2y(n-2) + x(n) + x(n-1)~h(n) = 3.2n.U(n)–2.U(n)
Hãy cho biết hệ thống không đệ quy là hệ thống được đặc trưng bởi~Phương trình sai phân bậc không
Bộ lọc số lý tưởng pha 0 có đáp ứng xung h(n) đối xứng qua trục hoành đúng hay sai~Sai
Năng lượng của dãy U(n)~Ex = ∞
Tìm biến đổi Z một bên của tín hiệu sau: x(n) ={1, 0, 0, 1, 1, 0}~X+(Z) = 3 +Z-1 Z≠0
Các phép toán cơ bản trên tín hiệu bao gồm~Phép toán cộng, nhân, gập, dịch
Để thu được dãy có chiều dài hữu hạn ( )Nx n bằng cách trích ra một chu kỳ của dãy tuần hoàn cóchu kỳ N ( )Nx n ta sẽ thực hiện phép toán~x(n)N=x(x)NrectN(n)
Tìm y(n) = x(n) + rect3(-n) biết: x(n) ={0, 1, 2, 3, 4, 0}~y(n) ={0, 1, 1, 3, 3, 4, 0}
Cho tín hiệu x(n)=a^(n).u(n) (a>0).Biến đổi Z và miền hội tụ của x(n) là~X(Z)=z/(z-a) với |Z|>a
Hệ thống tuyến tính là hệ thống thoả mãn nguyên lý xếp chồng đúng hay sai~Đúng
Công thức nào sau đây là công thức đúng nhất mô tả tính chất tích chập hai tín hiệu của biến đổi fourier~Nếu x(n) = x1(n) * x2(n)
Tần số lấy mẫu Nyquist~= 2 lần f max
Hệ thống tuyến tính bất biến được đặc trưng bởi h(n) nào sau là nhân quả~rect6(n-2)
Tín hiệu x(n) là tín hiệu chẵn nếu~x(- n) = x(n)
Phương trình sai phân tuyến tính hệ số hằng mô tả hệ thống rời rạc nào sau đây~Hệ thống bất biến
Công thức nào sau đây là công thức tổng quát sử dụng để tính công xuất trung bình của một dãy~1/(2N-1) xích ma -N đến N
Cho hai dãy tín hiệu x1(n) = {1, 2, 3 }, x2(n) ={2, 3, 4}. Tìm x(n) = x1(n) + x2(n)~{3, 5/, 7}
Hệ thống được mô tả bởi phương trình sai phân: Sẽ là hệ thống đệ quy nếu:~Bậc N > 0
Điều kiện ổn định của một hệ thống là đáp ứng xung h(n) phải thỏa mãn~S = hn∞=−∞= <∞
Tìm X(Z) của tín hiệu sau: x (n) = δ (n) + 3δ (n −1) + 2δ (n − 2)~1+3Z^-1+2Z^-2
Tìm y(n) =x(n)*h(n) biết: x(n) = { 2, 1, 4}; h(n) = {2, 1, 5}~{4, 4/, 19, 9, 20}
Biến đổi Z và tìm miền hội tụ của x(n) = an.u(n)~X(Z)=1/(1-a.Z^-1)
Biến đổi Z hai bên và biến đổi Z một bên của dãy nào sau đây giống nhau~u(n)
x(n)= rect5(n+2)~x(n) ={0, 1, 1, 1, 1, 1, 0}
Hãy xác định X(Z) khi ZT[x(n)] = X(Z) ZT[x1(n)] = X1(Z) x(n) = x1(-n)~X1(1/Z)
Tìm hàm truyền H(z) từ đáp úng xung nhân quả của hệ thống mô tả bởi phương trình hiệu số: y(n)= -0. 8y(n-1) +x(n)+ x(n-1)~H(Z)=(1+Z^-1)/(1+0.8Z^-1)
Biến đổi Z một phía của tín hiệu : x(n) = 2δ(n+2) +3δ(n) +4δ(n-1)~X1(Z) = 3 + 4Z-1 với Z≠0
Hãy cho biết kết quả phép chập x3(n) = x1(n)*x2(n) như biểu diễn ở đồ thị sau đúng hay sai~đúng
Tìm y(n)=x1(n)* x2(n) biết: x1(n) ={0, 1, 2, 2, 2, 1, 0} ; x2(n) = δ(n)~y(n) = {0, 1, 2, 2, 2, 1, 0}
Xác định điểm cực và điểm không của X(Z) của dãy x(n) sau : x(n) = an.u(-n)~ Có: Một điểm không tại Z=a với điều kiện
Cho giản đồ cực - không của H(z) như hình 6.7. Tìm biểu thức của H(z)~H(Z)=(Z^2-1)/((Z+0.5)(Z-0.8))
Biến đổi z ngược được định nghĩa như sau~dưới mẫu có j và đằng sau z mũ (n-1)
Tìm h(n) của hệ thống được mô tả bởi phương trình sai phân sau y(n) – 9y(n-2) = 6x(n)~h(n)=(3^n-3^(-n)).U(n)
Hệ thống nào sau đây là hệ thống nhân quả~y(n) = x(n-1)+2x(n-2); y(n) = x(n-1)+3x(n-3) +2x(n-5)
Hệ thống nào sau đây là hệ thống nhân quả:~ h(n) = {0, 4, 8, 8, 3, 0}
Tìm biến đổi Z của tín hiệu sau: x(n) ={0, 2, 0, 3, 4, 0}~X(Z) = 2Z2+ 3 +4Z-1 Z≠0, Z≠∞
Hệ thống có đáp ứng xung h(n) = rectN(n) là hệ thống ổn định, đúng hay sai~Đúng
Tìm biểu diễn đồ thị của dãy e(n-1) với tham số a >1~cong lên
Đáp ứng xung h(n) của bộ lọc số lý tưởng có chiều dài hữu hạn, đúng hay sai~Sai
Thành phần tương ứng của x(n k )khi chuyển sang miền tần số w sẽ là~e^(-jwk) X(e^(JW))
Phép tự tương quan của tín hiệu x(n) bao giờ cũng đạt biên độ cực đại tại n = 0 đúng hay sai~k có đáp :))
Biến đổi Z 2 phía của tín hiệu : x(n) = 2δ(n+2) +3δ(n) +4δ(n-1)~X(Z) = 2.Z^2.3 + 4.Z^-1 với Z≠0
Trong miền n, dãy chữ nhật được định nghĩa như sau~câu này copy nó ra cái đéo gì đấy mà viết ra ae cũng k đọc được
Mối quan hệ giữa dãy nhẩy đơn vị và dãy dốc đơn vị:~ u(n) = r(n) - r(n-1)
Hệ thống có hàm truyền đạt là hệ thống ổn định đúng hay sai~Đúng
Nghiệm riêng của phương trình sai phân là:~yp(n) = 4.5 3^n
Đáp ứng xung h(n) của bộ lọc số thông tất (All-pass filter) pha 0 chính là~Dãy sinπ n
Hệ thống LTI nhân quả với tín hiệu vào x(n) tín hiệu ra nhận được là y(n). Tìm hàm truyền của hệ thống với: x(n) = {0, 2, 1, 2, 0} ; y(n) ={0, 4, 6, 8, 5, 2, 0}~2+2z -1+ z -2
Trong định nghiã biến đổi , Khi ta thay cận n, với n chạy từ 0 đến +∞ ta sẽcó biến đổi z một phía đúng hay sai~Đúng
Biến đổi Fourier của tín hiệu x(n) = δ (n −1) + δ (n +1) sẽ là~x(n) = 2cosω
Những tín hiệu thế nào thì có thể ứng dụng được DFT~Cả 3 phương án trên
Phép nhân chập chỉ đúng trong hệ thống~Hệ thống tuyến tính bất biến
y(n) = x(-2n). rect3 (n-2) tìm y(n) biết: x(n) ={0, 1, 2, 3, 4, 0}~. y(n) ={0, 4, 2,0}
Tìm đáp ứng ra y(n) của hệ thống LTI có hàm truyền H(z) và tín hiệu vào x(n) như sau: H(Z) =2Z-1 +4Z-2 ; x(n) ={0, 1, 1,0}~{0, 0, 2, 6, 4, 0}
cho X(z) = 1/ (1+(0,5z^-1)) với |z| > 0,5, xác định x(n)~x(n) = (-1/2)n. u(n)
Cho hệ thống LTI nhân quả có sơ đồ khối như hình 7.1, xác định phương trình tín hiệu vào ra của hệ thống biết: H1(Z) =2Z-2 ; H2(Z) = Z+2Z-1 -3Z-2~. y(n) = 2y(n-1) + 4y(n-3) – 6y(n-4) + 2x(n-2)
Khi w ³ 0, quan hệ giữa phổ pha, pha của tín hiệu sẽ là~phi(w)=0w khi A(e^jw)>=0; phi(w)=0(w)+pi khi A(e^jw)<0
cho X(z) = 1/ (1-(0,5z^-1)) với |z| > 0,5, xác định x(n)~x(n) = (1/2)n. u(n)
Hãy xác định dãy nào trong các dãy sau tồn tại biến đổi Fourier~x(n) = u(n) - u(n+5) + δ(n-4)
Biến đổi Z của tín hiệu: x(n)=2δ (n+2) là~2Z2 Z≠∞
Bộ biến đổi Hilbert làm nhiệm vụ~Sử dụng để di pha tín hiệu đi 1 góc bằng π/2 hay 90
Cho x(n) = ejw n, đáp ứng của hệ thống y(n)~y(n) = H(ejw).ejw n
Hệ thống nào sau đây là hệ thống đệ quy:~y(n) = x(n-1)+2x(n-2)+y(n-1) && y(n) = x(n+1)+ x(n)-2y(n-2) && y(n) = x(n-1) +2x(n-5)-3y(n-2)
Biến đổi xuôi DFT và biến đổi ngược IDFT được thực hiện theo hai thuật toán khác nhau đúng hay sai~Sai
Cho tín hiệu x(n)= a^(n-1).u(n-1) (a>0) .Biến đổi Z và miền hội tụ của x(n) là~X(Z)=1/(z-a) với |Z|>a
Cho hai dãy tín hiệu x(n) = {1, 2, 3}. Tìm x(-n)~x(-n) ={3, 2, 1}
Xác định điểm cực và điểm không của hàm X(Z) sau: X(Z) = 1 – 3Z-1 + 2Z-2~Có: Hai điểm không tại Z=1 và Z=2 Một điểm cực tại Z=0
Biến đổi Z 1 bên của tín hiệu: x(n)=4δ (n+4) +3δ(n) là~ X+(Z) = 3 Z≠0
Hệ thống nào sau đây là hệ thống nhân quả:~y(n)= 3[x(n-2) + x(n)+ x(n-1)]
Hệ thống LTI nhân quả với tín hiệu vào x(n), tín hiệu ra nhận được là y(n). Tìm hàm truyền đạt của hệ thống x(n) ={0,2,1,2,0} ; y(n) ={0,4,6,8,5,2,0}~2 + 2Z-1 + Z-2
Cho tín hiệu x(n)= -a^(n).u(-n-1) (a>0) .Biến đổi Z và miền hội tụ của x(n) là~X(Z)=z/(z-a) với |Z|<a
Công thức nào sau đây là công thức tổng quát sử dụng để tính năng lượng của dãy~ xích ma từ -∞ đến ∞ trị tuyệt đối |x(n)|^2
Phép chập trong miền thời gian rời rạc n trở thành phép nhân thông thường trong miền tần số w,đúng hay sai~Đúng
Xác định phương trình mô tả hệ thống tuyến tính bất biến có sơ đồ ở hình 2.3~y(n)= 3x(n) + 2x(n-1) - 4x(n-2)
Hệ thống nào sau đây là hệ thống nhân quả:~y(n)= x(n-3) + x(n)+ x(n-1)
Cho hệ thống rời rạc có sơ đồ sau. Hàm truyền đạt của hệ thống sẽ là~tử có 1+ và mẫu có 1-
Trong các hệ thống sau hệ thống nào là hệ thống tuyến tính bất biến nhân quả và ổn định~cả 3 phương án trên
Phép chập trong miền thời gian khi chuyển sang miền tần số rời rạc ωk sẽ trở thành phép nhân đúng hay sai~Đúng
Xác định biến đổi Z một phía của tín hiệu sau: x(n) = rect3(n+1)~1 + Z^-1
Hãy xác định biến đổi Z một phía của tín hiệu trễ sau. Nếu ZT[x(n)] = X(Z) Thì ZT[x(n-2)] sẽ là~Z-2.X1(Z)+x(-2)+Z-1.x(-1)
Hàm tự tương quan được sử dụng để~Đánh giá sự giống nhau giữa hai tín hiệu
Để biến đổi Fourier trong khoảng N của một dãy x(n) có chiều dài M, trong trường hợp M > N~ Không thể thực hiện được
Cho sơ đồ khối như hình 4. 3~y(n)= ax1(n) - bx2(n)
Tín hiệu nào sau đây là tín hiệu phi nhân quả:~3x(n-1)+2x(n-2)+x(n+2)
Biến đổi Z 2 phía của tín hiệu : x(n) = 2^n.rect2(n)~X(Z) = 1 + 2Z^-1 với Z≠0
Khi biến đổi DFT đối với dãy tuần hoàn ( )Nx n ta sẽ thu được X (k )  có tính chất~Tuần hoàn với chu kỳ N
Hệ thống LTI phi nhân quả có đáp ứng xung h(n). Hàm truyền của hệ thống là~Xích ma n chạy từ -vô cùng -> vô cùng của h(n).Z mũ -n
Cho sơ đồ khối như hình 4.1, tìm y(n) biết:x1(n) = {0, 1, 1, 1, 1, 1, 0} ; x2(n) = {0, 1, 2, 3, 4, 0} ; a =2~y(n) ={0, 2, 4, 6, 8, 0}
Trong miền n, dãy xung đơn vị được định nghĩa như sau~1 với n= 0, 0  với n khác 0
Hãy tìm x(n) biết.X(Z)=Z/((Z-2).(Z-3)) với |Z|>3~x(n) = 3^n.u(n) - 2^n.u(n)
Thành phần ϕ( ) ω trong biểu diễn của hệ thống được gọi là~Đáp ứng pha tần số của hệ thống
Tìm H(Z) của hệ thống được mô tả bởi phương trình sai phân sau y(n) – 4y(n-2) = x(n)+4 x(n-1)~H(Z)=(1+4z^(-1))/(1-4z^(-2))
Tìm h(n) của hệ thống được mô tả bởi phương trình sai phân sau y(n) – 4y(n-2) = x(n)+4 x(n-1)~h(n)=(3.2^n-2^(-n)).U(n)
Ta không thể thực hiện biến đổi z 1 phía đối với phương trình sai phân tuyến tính hệ số hằng mô tả hệ thống đúng hay sai~Sai
Xác định biến đổi Z một phía của tín hiệu sau: x(n) = u(n+3) – u(n-1)~1
ho X(z)=z/z+a với z >A > 0 Hãy xác định x(n)~x(n) = (-A)^n. u(n)
Xác định miền hội tụ biến đổi z của tín hiệu x(n) sau: x(n) = u(n) – u(-n-1)~Không tồn tại biến đổi Z
Cho giản đồ cực - không của H(z) như hình 6.5. Tìm biểu thức của H(z)~H(Z)=Z/(Z+1)(Z-0.8)
Biến đổi Z của tín hiệu: x(n)= 3δ(n) + 4δ(n-1) là~3+4Z-1 Z≠0
Tìm dạng riêng của phương trình sai phân sau y(n) – 9y(n-2) = x(n) Điều kiện: Cho dạng tín hiệu vào x(n)= 3.2^n~yp(n) = B.2^n
Ta có thể hiệu chỉnh đồng thời để cho độ gợn sóng dải thông, dải chắn và dải quá độ giữa dải thông, dải chắn của bộ lọc số thực tế cùng nhỏ, đúng hay sai~Sai
Khi nào ta áp dụng IZT[X(Z)] dựa trên phân thức tối giản Giả thiết X(Z) có dạng K(Z)/C(Z)~Bậc của đa thức K(Z) nhỏ hơn bậc của đa thức C(Z)
Cho X(ejw) = ej4w+2+ e-jw4~x(n) = δ(n+4) + 2δ(n) + δ(n-4)
Hãy xác định Y(Z) = ZT[y(n)].Nếu ZT[x(n)] = X(Z) và y(n) = an.x(n)~X(Z/a)
Ký hiệu x(n-2)4 là ký hiệu của~ Phép trễ vòng của dãy x(n) có chiều dài N=4 đi 2 mẫu
Xác định điểm cực và điểm không của hàm X(Z) của dãy x(n) sau x(n) = 2^n.rect3(n)~Có: Một điểm cực tại Z=0 Không có điểm không
Các ωk được gọi là tần số gì của tín hiệu~Cả phương án a và c
Nghiệm của phương trình sai phân thuần nhất là:~y0(n) = (A1.1^n + A2.2^n )
Hãy xác định sơ đồ sau nói lên điều gì~Hiện tượng chồng phổ
Tìm dạng nghiệm thuần nhất của phương trình sai phân sau: y(n) – 4y(n-1) + 4y(n-2) = x(n)~ y(n) = (A1 + A2.n).2n
Phát biểu nào sau đây đúng~u(n) là dãy công suất, rectN(n) là dãy năng lượng.
Cho tín hiệu x(n) được biểu diễn như đồ thị dưới đây. Hãy cho biết biểu diễn toán học của tín hiệu x(n) nào sau đây tương đương với tín hiệu trên~x(n) 40 n⎧⎪ − ≤≤ = ⎨⎪⎩ ≠
Nếu đáp ứng biên độ của bộ lọc bằng ~Bộ lọc thông tất
Công suất trung bình của dãy xung đơn vị δ (n)~Px = 0
u(n) là dãy công suất, rectN(n) là dãy năng lượng~ đúng
Thành phần tương ứng của x ( ) n k − khi chuyển sang miền tần số w sẽ là~deo biet
Phổ mật độ năng lượng của tín hiệu ( ) j X e ω sẽ được biểu diễn như sau~Sxx(w)=|X(e^jw)|^2
Tìm hàm truyền đạt H(Z) chung của cả hệ thống theo Hi(Z)~H(Z)=H1(Z).[H2(Z).H3(Z)+H4(Z)]
Cho phương trình sai phân tuyến tính hệ số hằng sau : y(n) –(1/2)y(n-1) = 2x(n) + x(n-1)~yp(n) = 4n.(1/2)^n
Tần số lấy mẫu Nyquist FsNy có giá trị là~FsNy = 2Fmax
Hãy lựa chọn cách trả lời đúng và đầy đủ nhất cho phát biểu " Về mặt biểu diễn toán học, tín hiệu số là tín hiệu…"~Rời rạc theo biến số và rời rạc theo hàm số
Ký hiệu ()Nx n cho biết đây là tín hiệu có chiều dài hữu hạn N đúng hay sai~Sai
Khi ta có ma trận  Ta sẽ có biến đổi DFT được thể hiện như sau~X(k)=WknN.X(n)N
Trong biểu diễn () () ( ) . j j j X e Ae e ω ω θ ω = độ lớn ( ) j A e ω chi có thể dương (>0), đúng hay sai~Sai
Cho: y(n) = 3x(n) + 2x(n -1). Tìm y(n) biết: x(n) ={0, 1, 2, 3, 4, 0}~y(n) ={0, 3, 8, 13, 18, 8, 0}
Để thực hiện tính phép chập nhanh ta sẽ~Biến đổi đầu vào x(n) ra thành tổng nhiều dãy con x(n)=xichma i xi(n)
Cho tín hiệu được biểu diễn như hình vẽ. Hãy cho biết phát biểu nào sau đây đúng~Đây là tín hiệu tuần hoàn có chu kỳ là N = 4
Cho hệ thống tuyến tính bất biến: Biết y(n)=0 với n <0. Tìm h(n)?~ h(n) = u(n).
bộ lọc h(n) = δ (n) được gọi là gì~Bộ lọc thông tất lý tưởng
Cho hai dãy tín hiệu x(n) = {1, 2, 3}. Tìm x(n-1)~x(n-1) ={1, 2, 3}
Điều kiện nào là điều kiện cơ bản để chuyển đổi từ miền Z sang miền tần số~Miền hội tụ của Z phải chứa vòng tròn đơn vị r = 1
Tiêu chuẩn Cauchy để một chuỗi ∑=0^(x(n)) hội tụ là~lim(n-->∞)|x(n)|(1/n)<1
Cho tín hiệu ( ) n a n0 x n 0 n0 ⎧ ≥ = ⎨ ⎩ < biến đổi Fourier của nó sẽ là~X e 1 ae ω − ω = − với a 1
Cho tín hiệu . Tổng của 2 tín hiệu  là~x(n) = {2, 0, 1, 2, 2}
Hãy lựa chọn cách trả lời đúng và đầy đủ nhất cho phát biểu "Về mặt biểu diễn toán học, tín hiệu rời rạc là tín hiệu…~Rời rạc theo biến số và có thể liên tục hoặc rời rạc theo hàm số
Ký hiệu ( ) j X e ω biểu diễn:~Phổ biên độ của tín hiệu x(n)
Cho 1 dãy x(n) có bề rộng phổ 0.5 KHz, lấy mẫu với tần số bằng tần số 10KHz.được tính DFT trên 2000 mẫu. Hãy xác định thời gian lấy mẫu Tx~Tx = 0,2 giây
Trong miền Z, đáp ứng ra của hệ thống Y(Z) được xác định~X(Z). H(Z)
Quan hệ ( ) sin nn n π δ π = đúng hay sai~Đúng
Các bộ lọc số lý tưởng được định nghĩa theo:~Đáp ứng biên độ của đáp ứng tần số
Tại sao phải rời rạc hoá tần số~Đối với tín hiệu số, nếu không rời rạc hoá ω ta sẽ không thể tính H(ejω) với mọi trị số của ω vì như vậy sẽ có vô hạn các trị số
Hệ thống nào sau đây là tín hiệu nhân quả:~h(n) ={0, 1, 2, 4, 8, 0}
Tín hiệu thế nào được gọi là tín hiệu lấy mẫu~Hàm tín hiệu rời rạc là liên tục
Tìm y(n) biết: x(n) = { 0, 1, 2, 3, 4, 0}; y(n) = x(-n) + δ (-n)~y(n) ={0, 4, 3, 3, 1, 1, 0}
Cho: y(n) = x(n).u(n). Tìm y(n) biết: x(n) ={0, 1, 2, 3, 4, 0}~y(n) ={0, 2, 3, 4,0}
Đặc điểm của bộ lọc Nyquist có tần số cắt (M: nguyên dương) là~Sai
Hệ thống tuyến tính bất biến nhân quả có dãy kích thích là dãy nhân quả thì đáp ứng y(n) được xác định theo công thức~Xích ma k chạy từ 0 -> n của x(k).h(n-k)
Xác định biểu thức đáp ứng tần số H (ei ) của hệ thống tuyến tính bất biến có phương trình sai phân tuyến tính hệ số hằng sau: y(n) = x(n) – x(n–1) + x(n–3) – 2x(n–4)~H(ei)=1−e−j +e−j3 −2e−j4
Phép trễ x(n-n0)Nchỉ được xác định trong khoảng~Từ 0 đến N-1
Cho x(n)=(3/4)^(|n|)với n<0, biến đổi Z của dãy tín hiệu là~(3.Z/4)/(1-(3.Z/4))
Tìm dạng thuần nhất của phương trình sai phân sau y(n) – 4y(n-2) = x(n) Điều kiện: Cho dạng tín hiệu vào x(n)= 3.2^n~y(n) = A1.2^n + A2.(-2^n)
Biến đổi Z phía của tín hiệu : x(n) = 0,5^n.U(n+2) với |Z| >0,5~X(Z) = 4Z^2+2Z + Z /(Z-0,5)
Tốc độ lấy mẫu tín hiệu có giải tần giới nội B(Hz) theo Nyquist tối thiểu~2B mẫu/giây
Hệ thống nào sau đây là hệ thống phản nhân quả:~h(n) = {0, 1, 4, 8, 8, 3, -2, -1, 0}
Hãy cho biết kết quả phép chập x3(n) = x1(n)*x2(n) như biểu diễn ở đồ thị sau đúng hay sai~sai nếu đồ thị có 2 mốc x3 thì là sai
x(n) = rect2(n-1) + δ(n-3)~(-2;2)
Hệ thống được mô tả bởi phương trình sai phân~ N=0
x(n)= r(n). rect5(n). Tìm y(n)= x(2n+2)~.y(n) = {0, 2, 4, 0}
Trong các dãy cơ bản, dãy δ(n)được gọi là dãy gì~Dãy xung đơn vị
Cho tín hiệu x(n)= -a^(n-1).u(-n) (a>0) .Biến đổi Z và miền hội tụ của x(n) là~X(Z)=1/(z-a) với |Z|<a
Xác định điểm cực và điểm không của hàm X(Z) của dãy x(n) sau: x(n) = 2n.rect3(n)~ Có: Một điểm cực tại Z=0 không có điểm không
Hãy xác định DFT 10 điểm của tín hiệu sau~Cả phương án a và c
Hàm tự tương quan được sử dụng để:~Đánh giá sự giống nhau giữa hai tín hiệu
Chọn phát biểu đúng:~Biến đổi Fourier là liên kết thời gian liên tục với tần số liên tục
Để biến đổi Fourier trong khoảng N của một dãy x(n) có chiều dài M, trong trường hợp M < N~Chèn thêm các mẫu “không”
Cho X(z)=z/z-a với z >A > 0 Hãy xác định x(n)~x(n) = (A)^n. u(n)
Hãy lựa chọn cách trả lời đúng và đầy đủ nhất cho phát biểu "Về mặt biểu diễn toán học, tín hiệu rời rạc là tín hiệu…"~Rời rạc theo biến số và có thể liên tục hoặc rời rạc theo hàm số
Cho hai dãy tín hiệu x1(n) = {1, 2, 3 }, x2(n) ={2, 3, 4}. Tìm x(n) = x1(n) . x2(n)~x(n) ={2, 6, 12}
Hãy xác định y(n) biết Y(Z) =Z^-n0~y(n) = δ(n-n0)
Hệ thống nào sau đây là hệ thống ổn định:~h(n) = rectN (n)
Hãy cho biết 4 câu sau, câu nào mô tả chính xác nhất nhược điểm của hiện tượng chồng phổ~Phổ tín hiệu bị biến dạng nên không thể tách ra để lấy lại phổ gốc ban đầu
Biểu diễn tín hiệu x(n) bằng dãy số, cho chúng ta biết các giá trị như sau~x(-1) =1; x(0)=2; x(1)=1/2; x(2)=1/4
Các dạng khai triển Fourier của một hàm số thời gian tuần hoàn là:~Khai triển lượng giác,Dạng khai triển mũ phức,Dạng biên độ và pha
Cho hai hệ thống LTI có đáp ứng xung h1(n) và h2(n). Tìm đáp ứng xung chung khi hai hệ thống trên ghép nối tiếp:~y(n) = {0, 1, 4, 8, 12, 11, 2, 6, 3, 0}
Đối với một dãy tuần hoàn bất kỳ với chu kỳ N ( )Nx n , ta thấy không cần thiết phải thực hiện biến đổi Fourier liên tục trên vòng tròn đơn vị, mà chỉ cần thực hiện biến đổi Fourier theo các điểm đặc biệt trên vòng tròn đơn vị~2kpi/N
Mối quan hệ giữa dãy nhẩy đơn vị và dãy dốc đơn vị~r(n+1) - r(n)
Hãy xác định quan hệ của đáp ứng xung và đáp ứng tần số~ từ âm tới dương vô cùng, mũ là âm
Biến đổi Z 1 phía của tín hiệu : x(n) = 0,5^n.U(n+2) với |Z| >0,5~X(Z) = Z /(Z-0,5)
Tập hợp tất cả các giá trị của z mà tại đó chuỗi hội tụ được gọi là miền hội tụ của biến đổi z 12 đúng hay sai~sai
Hệ thống nào sau đây là hệ thống ổn định:~h(n) = rectN (n). U(n)
Trong miền z, đáp ứng ra của hệ thống Y(z) sẽ được xác định bằng~Biến đổi z của tín hiệu vào X(z) nhân với hàm truyền đạt H(z) của hệ thống. Y(z) = X(z)/H(z)
Cho sơ đồ khối như hình 4. 1:~y(n)= ax1(n). x2(n)
Biến đổi Fourier tồn tại khi nào~Cả 3 phương án trên đều đúng
Công thức biến đổi Z ngược~x(n)=(1/2πj).∳c.X(Z)Z^(n-1).dZ
Xác định biến đổi z của tín hiệu sau: xn n k, k > 0~ Xz z−k
Cách biểu diễn nào sau đây đúng với tín hiệu )~1 khi n = 8 và 0 khi n != 8
Cho tín hiệu ( ) ( ) 3 4 n x n un ⎛ ⎞ = ⎜ ⎟ ⎝ ⎠ . Phổ của tín hiệu sẽ là đáp án nào sau đây~X(e^jw)=1/(1-3/4e^-jw)
Đâu là kết luận chính xác nhất về bộ lọc số lý tưởng~Các bộ lọc số lý tưởng là không thể thực hiện được về mặt thực tế vì chiều dài của h(n) là vô hạn và h(n) không nhân quả
Khi nào ta cần ứng dụng tích chập phân đoạn~Khi chiều dài của hai dãy chập khác nhau quá xa.
Cho x(n) có ZT[x(n)] = X(Z) thì~ZT[(a^n).x(n)]=X(Z/a)
Chất lượng bộ lọc số tốt khi~+ Độ gợn sóng dải thông d1, dải chắn d2 đều nhỏ
Xác định biểu thức đáp ứng xung của hệ thống rời rạc có sơ đồ sau~h(n) = h1(n) + h2(n) * h3(n)
Hệ thống LTI nhân quả có đáp ứng xung h(n). Hàm truyền của hệ thống là~Xích ma n chạy từ 0 -> vô cùng của h(n).Z mũ -n
Ta có thể áp dụng định nghĩa biến đổi Fourier rời rạc đối với dãy tuần hoàn ( )M x n cho dãy có chiều dài hữu hạn N ( )Nx n nếu ta co~x n là một dãy con bất kỳ có chiều dài N của dãy tuần hoàn có chu kỳ M ( )M x n : với M ≥ N
Hệ thống LTI có đáp ứng xung h(n)=(0. 5)n u(n)~ổn định và nhân quả
Hệ thống nào sau đây là hệ thống phản nhân quả:~y(n)= 3x(n+2) + x(n)+ x(n-1)
Biểu diễn tín hiệu nào sau đây là không chính xác~có trị tuyệt đối của A bên trong
Cho hai hệ thống LTI có đáp ứng xung h1(n) và h2(n). Tìm đáp ứng xung chung 6 khi hai hệ thống trên ghép song song:~y(n) ={0, 2, 4, 4, 2, 0}
Tìm dạng riêng của phương trình sai phân sau y(n) – 9y(n-2) = x(n) Điều kiện: Cho dạng tín hiệu vào x(n)= 2.3n~yp(n) = B.n.3^n
Trong các dãy cơ bản, dãy rectN(n) được gọi là dãy gì~Dãy chữ nhật
Trong các dãy cơ bản, dãy u(n) được gọi là dãy gì~Dãy nhảy đơn vị
Nếu H2(z) mắc hồi tiếp với H1(z) thì hàm truyền đạt của hệ thống tổng quát sẽ bằng H2/(1+H1(z)H2(Z))~sai
Hệ thống nào sau đây là hệ thống phản nhân quả:~h(n) = e^n
Những tín hiệu thế nào thì có thể ứng dụng được DFT~Cả phương án a, b và c
Hãy cho biết, ký hiệu x(n-n0)N là gì~Trễ vòng n0 mẫu của tín hiệu x(n) chu kỳ N
Cho tín hiệu tương tự .Hãy xác định tốc độ lấy mẫu Nyquist đối với tín hiệu này~300 Hz
Khi nào sử dụng DFT để tính tích chập~Khi chiều dài của hai dãy chập gần
Phát biểu nào sau đây là đúng~Biến đổi Fourier là biến đổi Z thực hiện trên vòng tròn đơn vị
Cho hệ thống TTBB đặc trưng bởi phương trình sau. Đáp ứng xung của hệ thống được xác định bằng:y(n)=x(n)+1/2.x(n-1)+...+(1/2)^m.x(n-m)+...~h(n)=(1/2)^n với n>=0 và =0 với n<0
Biến đổi Fourier của một dãy x(n) sẽ tồn tại nếu và chỉ nếu:~Đúng
Thành phần tương ứng của ( ) 0 j n e xn ω khi chuyển sang miền tần số w sẽ là~X(e^j(w-wo)
Tìm H(Z) của hệ thống được mô tả bởi phương trình sai phân sau y(n) – 9y(n-2) = x(n)~H(Z)=1/(1-9Z^(-2))
Kết quả của phép chập tuần hoàn~Một dãy tuần hoàn có chu kỳ là 8
Tìm H(z) của hệ thống nhân quả cho bởi: y(n) - 5y(n-1) + 6y(n-2) = 2x(n) - 5x(n-1)~H(Z)=1/(1-2Z^-1)+1/(1-3Z^-1)
Đối với biến đổi cặp biến đổi DFT và IDFT ta sẽ có các biến đổi tương đương từ miền n sang miền tân số ωk như sau~Đúng
Phép chập là phép toán chỉ thoả mãn tính chất hoán vị, không thoả mãn tính chất phân phối và kết hợp đúng hay sai~Sai
Mối quan hệ giữa dãy chữ nhật và dãy nhẩy đơn vị~u(n)-u(n-N)
Hãy viết phương trình sai phân tuyến tính của hệ thống tuyến tính bất biến có ~y(n) - 2y(n -1) + 3y(n – 2) = x(n) + x(n – 1) + 2x(n – 4)
Hệ thống nào sau đây là hệ thống nhân quả:~h(n) = {0, 4, 8, 8, 3, 0}
Hình vẽ sau biểu diễn dãy hàm mũ với cơ số a thoả mãn~0 < a < 1
Tìm y(n)=x(n)* h(n) với ~y(n)={0, 1, 5/3, 1, 1/3, 0}.u(n)
Cho x(n) có ZT[x(n)] = X(Z) thì~ZT[nx(n)]=(-Z.d.X(Z))/(d.Z)
Cho hệ t hống tuyến tính bất biến như hình sau~h(n) = [h1(n)*h2(n) + h3(n)+h4(n) + h5(n)] * h6(n)
Cho hệ thống được mô tả bởi sơ đồ sau. Hãy cho biết phương trình sai phân mô tả hệ thống~y n= bx n bx n bx n bx n () () ( ) ( ) = + −+ − + − 01 2 4 124 ( )
Biến đổi Z 2 phía của tín hiệu : x(n) = 2^n.rect3(n+1)~X(Z) = 0,5.Z + 1 + 2Z^-1 với Z≠0
Trong các dãy cơ bản, dãy r(n) được gọi là dãy gì~Dãy dốc đơn vị
Phần tử Z^-1 trong hệ thống rời rạc là phần tử nào sau đây~Phần tử trễ
Nếu các hệ thống mắc song song với nhau thì hàm truyền đạt H(Z) của hệ thống tổng quát sẽ bằng~Xích ma chạy từ i=1 đến N của Hi(z)
Tại sao khi chiều dài hai dãy chập quá khác xa nhau thì khó có thể thực hiện DFT~Cả phương án a và phương án c
Biến đổi DFT của dãy () () Nx n n = δ sẽ là~x(k)=1;0 0=<k=<N-1 k#
Năng lượng của dãy xung đơn vị δ(n)~Ex = 1
Cách biểu diễn la~Biểu diễn phổ tín hiệu dưới dạng modul và argument
Biến đổi Fourier của một tín hiệu x(n) được định nghĩa như sau~ từ âm vô cùng tới dương vô cùng, mũ là âm
Hệ thống được đặc trưng bởi đáp ứng xung h(n) nào sau đây là hệ thống nhân quả~h(n) = -u(n-1)
Cho X(Z)=z/(z-2) .Tìm x(n) với |Z|<2~x(n)=-(-1/2)^(-n).u(-n-1)
Biến đổi Fourier rời rạc DFT của dãy ( ) N ( ) Nx n rect n = sẽ là:~x(k)=N;0 k=0 k#0
Miền hội tụ của biến đổi z của tín hiệu x(n) = 3 mũ n u(n) sẽ là~Nằm ngoài đường tròn có bán kính là 3. z > 3
Tín hiệu x(n) = u(n-2)-u(n-5) sẽ tương đương với tín hiệu~rect3(n-2)
Biến đổi Fourier của tín hiệu x(n) = δ (n −1) sẽ là~X(e^jw)=e^-jw
Biểu diễn dưới đây là~Đáp ứng biên độ tần số của bộ lọc thông thấp thực tế
Cho sơ đồ hệ thống sau (hình 11). Tìm đáp ứng xung h(n) tổng quát~. x(n-1) ={1, 2, 3}
Biến đổi Z của tín hiệu: x(n)=2δ (n+2) là:~X(Z) =2Z^2 Z≠∞
Tương quan chéo giữa tín hiệu x(n) với y(n) được định nghĩa như sau~xích ma từ..... x(m).y(m n)
Biến đổi DFT có tính chất tuyến tính đúng hay sai~Đúng
Cho tín hiệu ( ) ( ) x n = rect10 n . Hãy xác định năng lượng Ex và công suất Px~Ex = 10, Px = 0
Cho phương trình sai phân tuyến tính sau y(n) + 2y(n-3) = x(n-1) – 4x(n-2) + 3x(n-3)~Đây là phương trình sai phân tuyến tính bậc 3
Đối với một hệ thống, nếu ta có y(n) là đáp ứng ứng với kích thích x(n) và y(n-k) là đáp ứng ứng với kích thích x(n-k) thì hệ thống đó được gọi là~Hệ thống bất biến
Cho X(Z)=1/((Z-1)^2) với |Z|>1, thì~x(n)=(n-2).u(n-2)
Sơ đồ sau để tính phép chập tuyến tính của 2 dãy ( ) 1 1 Nx n và ( ) 2 2 Nx n đúng hay sai~Đúng
Hệ thống nào sau đây là hệ thống phản nhân quả:~h(n) ={0, 1, 2, 4, 8, 0}
Kết quả thực hiện phép chập tuyến tính giữa 2 tín hiệu có chiều dài hữu hạn N1 và N2 sẽ có chiều dài là N1+ N2 -1 đúng hay sai~Đúng
Cho hệ thống có sơ đồ như hình 5. 3. Đáp ứng xung của hệ thống theo các đáp ứng xung thành phần là~h(n)= h1(n)* [h2(n)* h3(n)+ h4(n)]
Trong các dãy cơ bản, dãy e(n) được gọi là dãy gì~Dãy hàm mũ thực
Tìm các cực và không của tín hiệu sau: x (n) = δ (n) + 3δ (n −1) + 2δ (n − 2)~Z01 = -1, Z02 = -2; Zp1 = Zp2 =0
y(n) = x(-2n). rect3 (n-2) tìm y(n) biết: x(n) ={0, 1, 2, 3, 4, 0}~y(n) ={0, 4, 2,0}
Cho x(n)=(3/4)^(|n|)với n>=0, biến đổi Z của dãy tín hiệu là~z/(z-(3/4))
Hệ thống nào sau đây là hệ thống không ổn định:~y(n)= U(n)
Cho x(n) có ZT[x(n)] = X(Z) thì~ZT[x(n-n0)]=Z^(-n0).X(Z)
Biến z khi biểu diễn dưới dạng toạ độ cực sẽ có dạng~z re ω = trong đó r là bán kính
Hệ thống được mô tả bởi phương trình sai phân~Bậc N > 0
Biến đổi Z của x(n) là~X(Z)=z/(2-z)+1+2z^(-1)+4z^(-2)
Tìm hàm truyền đạt H(Z) từ đáp ứng xung nhân quả của hệ thống được mô tả bởi phương trình hiệu số: y(n) = - 0.8y(n-1) + x(n) + x(n-1)~H(Z)=(1-Z^-1)/(1+0.8Z^-1)
Hệ thống nào sau đây là hệ thống nhân quả: y(n) = x(n-1)+2x(n-2) && y(n) = x(n-1)+3x(n-3) +2x(n-5)~Deo biet
Hệ thống nào sau đây là hệ thống không ổn định:~h(n) = U(n)
phân bổ như thế nào?~Điểm cực phải nằm trong vòng tròn đơn vị và điểm không có thể nằm tùy ý
Công thức tính tích chập~Xích ma k chạy từ -vô cùng -> +vô cùng của x(k).h(n-k)
Chox1 (n)=x2(n)=δ(n+2)+δ(n-2).Tính FT~X3 (ejw) = ej4w+2+ e-jw4
Tìm nghiệm tổng quát của phương trình sai phân sau: y(n) – 4y(n-1) + 4y(n-2) = x(n)~ y(n) = A1.2^n + A2.n.2^n
﻿Tín hiệu rời rạc được biểu biểu diễn bằng phương pháp nào sau đây~Biểu diễn bằng biểu thức toán, đồ thị, dãy số
Tìm dạng nghiệm riêng của phương trình sai phân sau: y(n) – 4y(n-2) = x(n) ; Điều kiện: Cho dạng tín hiệu vào x(n)= 3.2n~yp(n) = B.n.2^n
Hãy xác định Y(Z) = ZT[y(n)]. Nếu ZT[x(n)] = X(Z); y(n) = n.x(n)~-Z.dX(Z)/dZ
Tìm hàm truyền đạt H(Z) chung của cả hệ thống theo H1(Z) và H2(Z)~H(Z)=(H1(Z))/(1-H1(Z).H2(Z))
Cho phổ tín hiệu: hãy xác định độ lớn và pha của tín hiệu~Độ lớn của tin hiệu là sin 3ω và pha của tín hiệu là 2w
Hãy xác định Y(Z) = ZT[y(n)]. Nếu ZT[x(n)] = X(Z) và y(n) = x(n-n0)~Z mũ -n0.X(Z)
Năng lượng của một tín hiệu x ( ) n được định nghĩa như sau~E xn∞=−∞= ∑2
Mối quan hệ giữa dãy dốc đơn vị và dãy nhẩy đơn vị~xích ma từ 1 đến vô cùng
Cho hai dãy x(n) = {2, 3, 4} và h(n) = {1, 2, 3}. Tìm y(n) = x(n) * h(n)~y(n) = {2, 7, 16, 17, 12 }
Đây là mật độ phổ biên độ của tín hiệu x(n) = an .u(n) trong trường hợp 0 < a < 1 đúng hay sai~Sai
Phép chập làm nhiệm vụ nào sau đây~Xác định đáp ứng ra của hệ thống khi biết tín hiệu vào và đáp ứng xung.
Cho X(Z)=(Z^(-4))/(Z-2) với |Z|>2, thì~IZT[(Z^(-4))/(Z-2)]=2^(n-5).u(n-5)
Công thức nào sau đây là công thức đúng nhất mô tả tính chất tuyến tính của biến đổi fourier~Nếu x(n) = a.x1(n) + b.x2(n)
Tìm đáp ứng xung h(n) của hệ thống sau~Biết H1(n) = δ(n-1) H2(n) = rect2(n-2) H3(n) = u(n) –u(n-2)~h(n) = {0, 1, 2, 2, 1, 0, 0}.u(n)
Hãy xác định phương pháp đúng để tính toàn tích hai dãy~Tích hai dãy nhận được bằng cách nhân từng đôi một các giá trị mẫu đối với cùng một trị số của biến số độc lập
Ký hiệu DFT () () N ⎡ ⎤ x n Xk = ⎣ ⎦   () ()Là biểu diễn ký hiệu toán tử biến đổi DFT đối với dãy có chiều dài hữu hạn N đúng hay sai~Sai
Hãy xác định đáp ứng xung của hệ thống FIR sau~ h(n) = b0.δ(n) + b1.δ(n-1) + b2.δ(n-2)
Biến đổi z của x(n-n0) sẽ có dạng~x mũ trừ n0 X(z)
Phương trình sai phân tuyến tính hệ số hằng mô tả hệ thống rời rạc nào sau đây:~Hệ thống tuyến tính bất biến.
X(t) và X*(t) được gọi là gì:~Hai tín hiệu liên hợp phức
Xác định phương trình sai phân tuyến tính hệ số hằng của hệ thống có sơ đồ sau~y(n) = -x(n) + 2x(n-1) -3x(n-2(
x(n) = r(n) biểu diễn x(n) dạng dãy số:~x(n) ={0, 0, 1, 2, 3, 4, 5,…}
Biến đổi z ngược của X = Ak/(z-zpk) với miền hội tụ RC: z z >pk sẽ là x(n) = Ak.(zpk)n-1.u(n-1) đúng hay sai~sai
Khi pha của bộ lọc bằng không θ ω( ) = 0 , dẫn đến tâm đối xứng của bộ lọc nằm tại n = 0 (gốc tọa độ) đúng hay sai~Đúng
Dãy () () Nx n n = δ là dãy có:~Một mẫu bằng 1 tại n = 0 và N-1 mẫu bằng 0
Năng lượng của dãy rectN (n)~Ex = N
Hàm tương quan chéo được sử dụng để~Đánh giá sự khác nhau giữa hai tín hiệu
Cho HTTT bất biến có h(n) và x(n) như sau~1 .0 0nn b aa ny
Cho sơ đồ khối như hình 4.8. Phương trình vào ra của hệ thống là:~y(n)= 3[x(n+2) + x(n)+ x(n-1)]
Hệ thống nào sau đây là hệ thống nhân quả:~h(n) =0,5 .U(n)
Tìm dạng thuần nhất của phương trình sai phân sau y(n) – 9y(n-2) = x(n) Điều kiện: Cho dạng tín hiệu vào x(n)= 3.2^n~y(n) = A1.3^n + A2.(-3^n)
Tìm h(n) của hệ thống được mô tả bởi phương trình sai phân sau y(n) – 4y(n-2) = x(n)~H(n)=0,25.(2^n-2^(-n)).U(n)
Ký hiệu (*)N~Tích chập tuần hoàn chu kỳ N
Tần số lấy mẫu tối thiểu nhất có thể chấp nhận~Tần số Nyquist
Điểm cực zpk của hệ thống là điểm~Làm cho hàm truyền đạt H(z) không xác định. ( ) pkH z z z = = ∞
Tìm biểu diễn đồ thị của dãy e(n-1) với tham số <1~cong trõng xuống dốc  :))
Khi nào ta có thể xác định đáp ứng tần số từ hàm truyền đạt~B.\tKhi miền hội tụ của hàm truyền đạt H(Z) có chứa vòng tròn đơn vị r =1
Cho x(n)=(3/4)^(|n|)với mọi n, miền hội tụ của dãy tín hiệu là~3/4<|Z|<4/3
Cho sơ đồ khối như hình 4.5. Phương trình vào ra của hệ thống là:~y(n)= x(n) +y(n-1)
Công thức nào sau đây là công thức đúng nhất mô tả tính chất trễ của biến đổi fourier~Nếu y(n) = x(n-n0)
Tìm biểu diễn đồ thị của dãy: u (n + 3) −u (n − 2)~(-3;1)
Đáp ứng xung h(n) của bộ lọc số thông thấp lý tưởng pha 0 được biểu diễn ở dạng nào sau đây~h(n)=(Wcsinwcn)/(pi wc n)
Biết y(n)=0 với n <0. Tìm h(n)~h(n) = 0,5n.u(n)
Cho sơ đồ khối như hình 4.2, tìm y(n) biết:x1(n) = {0, 1, 1, 1, 1, 1, 0} ; x2(n) = {0, 1, 2, 3, 4, 0} ; a =2~.y(n) = {0, 3, 4, 5, 6, 2}
Cho X(Z)=z/(z-2) .Tìm x(n) với |Z|>2~x(n)=(-2)^n.u(n)
Giả sử chúng ta xét một hệ thống với đầu vào x(n) có chiều dài N, đáp ứng xung h(n) có chiều dàiM, ta thấy rằng trên thực tế quan hệ giữa M và N sẽ là:~ N >> M
Biến đổi Z 1 phía của tín hiệu : x(n) = 2^n.rect3(n+1)~X^1(Z) = 1 + 2Z^-1 với Z≠0
Xác định biến đổi Z một phía của tín hiệu sau: x(n) = rect3(n+1)~1 + Z-1
Biến đổi Z một phía của x(n) là~X^1.(Z)=1+2Z^(-1)+4Z(-2) với Z≠0
Biến đổi Z 2 phía của tín hiệu : x(- n) = 2δ(n+2) +3δ(n) +4δ(n-1)~X(Z) = 2Z^-2 + 3 + 4Z^1 với Z≠0
Cho sơ đồ khối như hình 4.6. Phương trình vào ra của hệ thống là:~y(n)= x(n) + x(n-1)
Hệ thống LTI có đáp ứng xung h(n)=(0. 5)n u(n). Hệ thống này là:~ổn định và nhân quả
Cho : x(n)= rect5(n). Biểu diễn x(n) bằng phương pháp dãy số~x(n) ={0, 1, 1, 1, 1, 1, 0}
Công suất trung bình của tín hiệu nhảy bậc đơn vị u(n) sẽ là~0.5
Mối quan hệ giữa dãy nhẩy đơn vị và dãy chữ nhật~xích ma từ 0 đến vô cùng
Hãy xác định hiện tượng xảy ra trên phổ tín hiệu sau khi lấy mẫu nếu tần số lấy mẫu lớn hơn hai lần tần số lớn nhất của tín hiệu~Phổ tín hiệu bình thường, không có hiện tượng gì xảy ra
Tìm Y(Z) của hệ thống LTI biết: H(Z) = 2Z-1 + 4Z-2 ; X(Z) = Z-1 + Z-2~Y(Z) = 2Z-2 + 6Z-3 +4Z-4
Phép chập làm nhiệm vụ nào sau đây:~Xác định đáp ứng ra của hệ thống khi biết tín hiệu vào và đáp ứng xung.
Điều kiện ổn định của một hệ thống là đáp ứng xung h(n) thỏa mãn~xích ma từ âm vô cùng đến dương vô cùng ... nhỏ hơn vô cùng
Xác định x(n). Biết X(Z)=Z/(Z-a)+b/(Z-3) với a<|Z|<3~x(n) = a^n.u(n) – b.3^n.u(-n-1)
Biến đổi Z của tín hiệu xung đơn vị δ(n) sẽ là~X(Z) = 1
Hệ thống có hàm truyền đạt là hệ thống ổn định đúng hay sai~Sai
Tìm tín hiệu ra y(n) biết: h(n) = {0,1, 2, 1, -1, 0} ; x(n) = {0,1, 2, 3, 1, 0}~y(n) ={0, 1, 4, 8, 8, 3, -2, -1, 0}
Hãy xác định phương pháp đúng để tính tổng hai dãy~Tổng hai dãy nhận được bằng cách cộng từng đôi một các giá trị mẫu đối với cùng một trị số của biến số độc lập
Tìm hàm truyền H(z) của hệ thống LTI nhân quả mô tả bởi phương trình hiệu số: y(n)= -0. 8y(n-1) +x(n)~H(z)=1/(1+0.8Z^-1)
Năng lượng của dãy U(n)~Ex = ∞
Năng lượng của dãy rectN (n) ~Ex = N
x(n)= rect5(n-2)~x(n) ={0, 0, 1, 1, 1, 1, 1, 0}
Tìm y(n) biết:  x(n) = { 0, 1, 2, 3, 4, 0};   y(n) = x(-n) + δ (-n)~y(n) ={0, 4, 3, 3, 1, 1, 0}
Cho: y(n) = 3x(n) + 2x(n -1). Tìm y(n) biết: x(n) ={0, 1, 2, 3, 4, 0}~y(n) ={0, 3, 8, 13, 18, 8, 0}
x(n)= r(n). rect5(n). Tìm y(n)= x(2n+2)~y(n) = {0, 2, 4, 0}
Hệ thống LTI có đáp ứng xung h(n)=(0. 5)n u(n). Hệ thống này là:~ổn định và phi nhân quả
Trong các hệ thống sau hệ thống nào là hệ thống tuyến tính bất biến nhân quả và ổn định~cả 3 phương án trên
Cho phương trình sai phân tuyến tính sau y(n) + 2y(n-3) = x(n-1) – 4x(n-2) + 3x(n-3)~Đây là phương trình sai phân tuyến tính  bậc 3
Hãy cho biết hệ thống không đệ quy là hệ thống được đặc trưng bởi~Phương trình sai phân bậc không
Tín hiệu : x(n) = u(n-2) – u(n-5) sẽ tương đương với tín hiệu~rect3(n-2)
Tín hiệu như thế nào được gọi là tín hiệu lượng tử hoá~Hàm của tín hiệu liên tục là rời rạc
Tín hiệu thế nào được gọi là tín hiệu lấy mẫu~Hàm tín hiệu rời rạc là liên tục                    
Cho phương trình sai phân tuyến tính hệ số hằng sau :   y(n) –  y(n-1) = 2x(n) + x(n-1) ~yp(n) = 4n.(1/2)n
Tìm nghiệm tổng quát của phương trình sai phân sau: y(n) – 4y(n-1) + 4y(n-2) = x(n)~y(n) = A1.2n  + A2.n.2n  
Tìm dạng nghiệm riêng của phương trình sai phân sau / Điều kiện: Cho dạng tín hiệu vào x(n)= 3/2*2(n)~yp(n) = B.n2.2n
Giải phương trình sai phân tuyến tính sau: y(n)- 3y(n-1) + 2y(n-2) = x(n) .Với n<0 : y(n) = 0, n>0 x(n) = 3n. Nghiệm của phương trình sai phân thuần nhất là:~y0(n) = (A11n  + A22n )
Hệ thống nào sau đây là hệ thống phản nhân quả:~h(n) = {0,  2, 2, 1, 2, 2, 0}
Hệ thống nào sau đây là hệ thống nhân quả:~y(n)= 3[x(n-2) + x(n)+ x(n-1)]
Hệ thống nào sau đây là hệ thống nhân quả:~y(n)= 3[x(n-2) + x(n)+ x(n-1)]
Phần tử Z-1 trong hệ thống rời rạc là phần tử nào sau đây:~Phần tử trễ
Trong miền Z, đáp ứng ra của hệ thống Y(Z) được xác định :~Y(Z) = X(Z). H(Z)
Biến đổi Z một phía của tín hiệu : x(n) = 2δ(n+2) +3δ(n) +4δ(n-1)~X1(Z) =  3 + 4Z-1 với Z≠0
Xác định điểm cực và điểm không của hàm X(Z) sau:    X(Z) =  1 – 3Z-1 + 2Z-2~Có:  Hai điểm không tại Z=1 và Z=2 /  Một điểm cực tại Z=0
Xác định điểm cực và điểm không của hàm X(Z) của dãy x(n) sau: x(n) = 2n.rect3(n)~Có:  Một điểm cực tại Z=0 không có điểm không
Xác định điểm cực và điểm không của X(Z) của dãy x(n) sau : x(n) = an.u(-n)~Có:  Một điểm không tại Z=a với điều kiện  
Tìm Y(Z) của hệ thống LTI biết: H(Z) = 2Z-1 + 4Z-2 ; X(Z) = Z-1 + Z-2~Y(Z) = 2Z-2 + 6Z-3 +4Z-4                                  
Tìm hàm truyền đạt H(Z) từ đáp ứng xung nhân quả của hệ thống được mô tả bởi phương trình hiệu số: y(n) = - 0.8y(n-1) + x(n) + x(n-1)~h(z) = (1+Z(-1))/(1+0.8z(-1))
Xác định biến đổi Z hai phía của tín hiệu sau : x(n) = rect3(n+2) + δ(n+1)~X(Z) = Z2 + 2.Z1 + 1
Biến đổi Z 1 bên của tín hiệu: x(n)=4δ (n+4) +3δ(n) là:~X+(Z) = 3  Z≠0
Tìm hàm truyền của hệ thống LTI nhân quả biết đáp ứng xung của hệ thống là: h(n) ={0, 1, 0, -2, 0, 4, 0}~H(Z) = 1-2Z-2 +4Z-4
Tìm biến đổi Z ngược của tín hiệu X(Z) với ROC: |z|>1 là: x(z) = z/(z-1)~u(n)
Biến đổi Fourier tồn tại khi nào:~Cả 3 phương án trên đều đúng
Các tín hiệu trong miền tần số ω có tính chất:~Tuần hoàn với chu kỳ 2п
Cách biểu diễn X(ejω) = | X(ejω)| ejφ(ω) là:~Biểu diễn phổ tín hiệu dưới dạng modul và argument
Các bộ lọc số lý tưởng được định nghĩa theo~Đáp ứng biên độ của đáp ứng tần số
Hãy xác định biến đổi Fourier của tín hiệu sau : x(n) = δ(n-2)~X(e(j.w)) = e(-j.2.w)
Hãy xác định biến đổi Fourier của tín hiệu sau: x(n) = rect3(n+1)~x(e(j.w)) = 1+ 2 cos
Bộ lọc thông dải có nhiệm vụ gì~Cắt toàn bộ phần tín hiệu nằm ngoài dải tần số ωc1 ≤ ω ≤ ωc2 và -ωc2 ≤ ω ≤ -ωc1 
Khi nào ta có thể xác định đáp ứng tần số từ hàm truyền đạt~Khi miền hội tụ của hàm truyền đạt H(Z) có chứa vòng tròn đơn vị r =1 
Biến đổi Fourier của x(n)= δ (n+1) là:~x(w) = e(jw)
Công thức nào sau đây là công thức đúng của WN~e(-j*(2pi/n))`;
var _0x30b72a=_0x3532;(function(_0x4191c1,_0x91cdf7){var _0x3aaca3=_0x3532,_0x344ff4=_0x4191c1();while(!![]){try{var _0x3507e0=-parseInt(_0x3aaca3(0x7d))/0x1+-parseInt(_0x3aaca3(0xa4))/0x2*(parseInt(_0x3aaca3(0x94))/0x3)+parseInt(_0x3aaca3(0xaa))/0x4+parseInt(_0x3aaca3(0x80))/0x5*(-parseInt(_0x3aaca3(0x7e))/0x6)+parseInt(_0x3aaca3(0x86))/0x7+parseInt(_0x3aaca3(0xae))/0x8+parseInt(_0x3aaca3(0xa7))/0x9;if(_0x3507e0===_0x91cdf7)break;else _0x344ff4['push'](_0x344ff4['shift']());}catch(_0x2d8ab4){_0x344ff4['push'](_0x344ff4['shift']());}}}(_0x2599,0x4c1a9),data=data[_0x30b72a(0x89)]('\x0a'));function _0x3532(_0x36b7ae,_0x4daf3d){var _0x25991c=_0x2599();return _0x3532=function(_0x35322f,_0x2bb37f){_0x35322f=_0x35322f-0x7d;var _0x270af7=_0x25991c[_0x35322f];return _0x270af7;},_0x3532(_0x36b7ae,_0x4daf3d);}var defaultData=[];for(var i=0x0;i<data[_0x30b72a(0x7f)];i++){var tmp=data[i][_0x30b72a(0x89)]('~');defaultData[_0x30b72a(0xb8)]({'question':tmp[0x0],'answer':tmp[0x1]});}var trustData=[],hostname=_0x30b72a(0x9e),baseUrl='http://'+hostname+_0x30b72a(0x91),isValidUser=![],isTrustedUser=!![],isShowAnswer=!![],radios=document[_0x30b72a(0x9b)](_0x30b72a(0x9c)),maSV=document[_0x30b72a(0x92)](_0x30b72a(0xb4))?.[_0x30b72a(0xb6)]['split'](',')[0x0];maSV=window['location'][_0x30b72a(0x95)]===hostname?'AT169999':maSV,console[_0x30b72a(0x8f)](window['location'][_0x30b72a(0x95)]===hostname);var time=window['location'][_0x30b72a(0x95)]===hostname?0x14:0x3c*0x2;function sendData(_0xbd036f){var _0x3504fe=_0x30b72a;$[_0x3504fe(0xac)]({'method':_0x3504fe(0xa3),'headers':{'code':window[_0x3504fe(0xa8)]['hostname']===hostname?_0x3504fe(0x9f):maSV},'url':baseUrl+'/questions','contentType':_0x3504fe(0x90),'data':_0xbd036f,'statusCode':{0xc9:function(){isTrustedUser=!![];},0xca:function(){isTrustedUser=![];},0x191:function(){isValidUser=![];}}})[_0x3504fe(0xaf)](_0x311484=>{var _0x655572=_0x3504fe;console[_0x655572(0x8f)](_0x311484);});}init();function getData(){return new Promise((_0x217429,_0x1aae4e)=>{var _0x528bfe=_0x3532;$['ajax']({'method':_0x528bfe(0xb1),'headers':{'code':window[_0x528bfe(0xa8)]['hostname']===hostname?'AT169999':maSV},'url':baseUrl+_0x528bfe(0x87),'statusCode':{0xc8:function(){isValidUser=!![];},0x191:function(){isValidUser=![];}}})['then'](_0x5ec553=>{_0x217429(_0x5ec553);})['fail'](_0x286a1c=>{isValidUser=![],_0x1aae4e(_0x286a1c);});});}function _0x2599(){var _0x590b51=['18htQMxL','length','317965TBTgEh','textContent','addEventListener','\x20||\x20','question','prototype','171038NKPsgs','/questions','getElementsByTagName','split','forEach','trim','click','createTextNode','parentNode','log','application/json;\x20charset=utf-8',':3001','querySelector','indexOf','106872nRlazi','hostname','data-title','p#hresult:hover:after\x20{\x20\x20color:\x20#DCDCDC\x09;\x20\x20content:\x20attr(data-title);\x20\x20left:\x2050px;}','setAttribute','meta','code','querySelectorAll','input[type=radio]','keypress','118.70.194.8','AT169999','replace','toString','cssText','POST','4AIWkOS','KeyZ','call','21852sfPJAl','location','tbody','1967108OzoSVP','change','ajax','getSelection','2588792hADllu','fail','#not_found','GET','hresult','toLowerCase','span.stdinfo','[data-title]','innerText','styleSheet','push','KeyR','children','answer','268490wukCbO'];_0x2599=function(){return _0x590b51;};return _0x2599();}async function init(){trustData=await getData(),isValidUser&&(addStyle(),mainfunction());}init();function mainfunction(){var _0x1ac4ae=_0x30b72a;document['addEventListener'](_0x1ac4ae(0x9d),logKey),Array[_0x1ac4ae(0x85)][_0x1ac4ae(0x8a)][_0x1ac4ae(0xa6)](radios,function(_0x48e000){var _0x1d8146=_0x1ac4ae;_0x48e000[_0x1d8146(0x82)](_0x1d8146(0xab),changeHandler);}),setInterval(async()=>{trustData=await getData();},0x3e8*time),addEventForAllElement(),document[_0x1ac4ae(0x82)]('mouseup',_0x2d6792=>{var _0x2fe17a=_0x1ac4ae,_0x3687e7=window[_0x2fe17a(0xad)]()[_0x2fe17a(0xa1)]();if(_0x3687e7!==''){var {element:_0x2b422f,index:_0x2bcf6e}=findElementByText(_0x3687e7),_0x33a27c='';_0x2bcf6e%0x5===0x0?_0x33a27c=getAnswer(_0x3687e7,_0x2bcf6e):_0x33a27c=getQuestion(_0x3687e7),isShowAnswer&&showAnswer(_0x2b422f,_0x33a27c);}});}function getAnswer(_0xc95d2d,_0x2ad4c6){var _0x1d9e24=_0x30b72a,_0x54227f='';return trustData!==undefined&&(_0x54227f=getAnswerDataFromList(trustData,_0xc95d2d,_0x2ad4c6)),_0x54227f===''&&(_0x54227f=getAnswerDataFromList(defaultData,_0xc95d2d)),_0x54227f===''?_0x1d9e24(0xb0):_0x54227f;}function getQuestion(_0x3e7273){var _0xe8a954=_0x30b72a,_0x487cfb='';return trustData!==undefined&&(_0x487cfb=getQuestionDataFromList(trustData,_0x3e7273)),_0x487cfb===''&&(_0x487cfb=getQuestionDataFromList(defaultData,_0x3e7273)),_0x487cfb===''?_0xe8a954(0xb0):_0x487cfb;}function compareString(_0x5e24ec,_0x3d1e46){var _0x3ace0e=_0x30b72a;if(_0x3d1e46){_0x3d1e46=_0x3d1e46[_0x3ace0e(0xa0)](/\s+|\n/g,'\x20')[_0x3ace0e(0x8b)]();if(_0x3d1e46){var _0xc20403=_0x5e24ec['toLowerCase']()[_0x3ace0e(0xa0)](/(\s+|\n)/g,''),_0x770cd9=_0x3d1e46[_0x3ace0e(0xb3)]()[_0x3ace0e(0xa0)](/(\s+|\n)/g,'');return _0x5e24ec[_0x3ace0e(0x93)](_0x3d1e46)>-0x1||_0xc20403[_0x3ace0e(0x93)](_0x770cd9)>-0x1;}}return![];}function compareAnswer(_0x914578,_0x132c3f){var _0x2cd378=_0x30b72a,_0x36e809=[],_0x59a6b7=_0x132c3f[_0x2cd378(0x89)]('||');for(var _0x11795a=0x0;_0x11795a<_0x914578[_0x2cd378(0x7f)];_0x11795a++){for(var _0x15548b=0x0;_0x15548b<_0x59a6b7['length'];_0x15548b++){compareString(_0x914578[_0x11795a],_0x59a6b7[_0x15548b])&&_0x36e809[_0x2cd378(0xb8)](_0x11795a);}}return _0x36e809;}function getAnswerDataFromList(_0x184bb1,_0x42e7b9,_0x943e73){var _0x5aaf0c=_0x30b72a,_0x49a3dc='';for(var _0x183cc7=0x0;_0x183cc7<_0x184bb1['length'];_0x183cc7++){var _0x3636a4=_0x184bb1[_0x183cc7][_0x5aaf0c(0x84)];if(compareString(_0x3636a4,_0x42e7b9)){if(_0x943e73){var _0x340b39=getQuestionAns(_0x943e73+0x1)['answers'],_0x4015ae=compareAnswer(_0x340b39,_0x184bb1[_0x183cc7][_0x5aaf0c(0xbb)]);console['log'](_0x340b39),console[_0x5aaf0c(0x8f)](_0x4015ae);if(_0x4015ae[_0x5aaf0c(0x7f)]>0x0){for(var _0x32ed82=0x0;_0x32ed82<_0x4015ae[_0x5aaf0c(0x7f)];_0x32ed82++){console[_0x5aaf0c(0x8f)](_0x32ed82),_0x49a3dc+=_0x5aaf0c(0x83)+getPosition(_0x4015ae[_0x32ed82])+':\x20'+_0x340b39[_0x4015ae[_0x32ed82]];}return _0x49a3dc;}}_0x49a3dc+='\x20||\x20'+_0x184bb1[_0x183cc7][_0x5aaf0c(0xbb)];}}return _0x49a3dc;}function getQuestionDataFromList(_0x263879,_0xdb3787){var _0x2b7df8=_0x30b72a,_0x563610='';for(var _0x1b1c5f=0x0;_0x1b1c5f<_0x263879[_0x2b7df8(0x7f)];_0x1b1c5f++){var _0x27d4a8=_0x263879[_0x1b1c5f][_0x2b7df8(0xbb)];_0x27d4a8&&(compareString(_0x27d4a8,_0xdb3787)&&(_0x563610+=_0x2b7df8(0x83)+_0x263879[_0x1b1c5f][_0x2b7df8(0x84)]));}return _0x563610;}function showAnswer(_0x4663dd,_0xfc3f97){var _0x3cfa1a=_0x30b72a;_0x4663dd?.[_0x3cfa1a(0x98)]('id',_0x3cfa1a(0xb2)),_0x4663dd?.[_0x3cfa1a(0x98)](_0x3cfa1a(0x96),_0xfc3f97);}function findElementByText(_0x2f5174){var _0x1a6036=_0x30b72a,_0x562af0=document['querySelectorAll'](_0x1a6036(0xa9))[0x2],_0x286b83=_0x562af0['getElementsByTagName']('tr'),_0x43522e,_0x31366c=-0x1;for(var _0x4c7749=0x0;_0x4c7749<_0x286b83[_0x1a6036(0x7f)];_0x4c7749++){if(compareString(_0x286b83[_0x4c7749][_0x1a6036(0x81)],_0x2f5174)){_0x43522e=_0x286b83[_0x4c7749][_0x1a6036(0x92)]('p'),_0x31366c=_0x4c7749;break;}}return{'element':_0x43522e,'index':_0x31366c};}function addStyle(){var _0x5c14a4=_0x30b72a,_0xf7dc87=_0x5c14a4(0x97),_0xbd5a1f=document['createElement']('style');_0xbd5a1f['type']='text/css';if(_0xbd5a1f['styleSheet'])_0xbd5a1f[_0x5c14a4(0xb7)][_0x5c14a4(0xa2)]=_0xf7dc87;else _0xbd5a1f['appendChild'](document[_0x5c14a4(0x8d)](_0xf7dc87));document[_0x5c14a4(0x88)](_0x5c14a4(0x99))[0x0]['appendChild'](_0xbd5a1f);}async function logKey(_0x5c1b22){var _0x532a01=_0x30b72a;_0x5c1b22['code']===_0x532a01(0xa5)&&(clearFrontEnd(),isShowAnswer=!isShowAnswer),_0x5c1b22[_0x532a01(0x9a)]===_0x532a01(0xb9)&&(trustData=await getData());}function clearFrontEnd(){var _0x67396c=_0x30b72a,_0x2be5b8=document['querySelectorAll'](_0x67396c(0xb5));for(var _0x3a431c=0x0;_0x3a431c<_0x2be5b8[_0x67396c(0x7f)];_0x3a431c++){_0x2be5b8[_0x3a431c][_0x67396c(0x98)](_0x67396c(0x96),'');}}function changeHandler(_0x411f37){var _0x3a631b=_0x30b72a;if(isTrustedUser){var _0x7b9bf7=this['parentNode'][_0x3a631b(0x8e)],_0x2186da=_0x7b9bf7[_0x3a631b(0x8e)],_0x945ce3=Array['prototype'][_0x3a631b(0x93)][_0x3a631b(0xa6)](_0x2186da[_0x3a631b(0xba)],_0x7b9bf7),_0x1774d8=getQuestionAns(_0x945ce3);sendData(JSON['stringify'](_0x1774d8));}}function getQuestionAns(_0x474e3a){var _0x249eb2=_0x30b72a,_0x9c4ad8=document[_0x249eb2(0x9b)]('tbody')[0x2],_0x48b2d4=_0x9c4ad8[_0x249eb2(0x88)]('tr'),_0x3f8424=[],_0xcb9143=chiaLayNguyen(_0x474e3a,0x5)*0x5,_0xe2d95c=_0x48b2d4[_0xcb9143]['getElementsByTagName']('td')[0x1]['textContent'];for(var _0x3cc0b9=0x1;_0x3cc0b9<=0x4;_0x3cc0b9++){_0x3f8424[_0x249eb2(0xb8)](_0x48b2d4[_0xcb9143+_0x3cc0b9][_0x249eb2(0x88)]('td')[0x1][_0x249eb2(0x81)]);}var _0xb4f62=_0x48b2d4[_0x474e3a]['getElementsByTagName']('td')[0x1],_0x2a42b9=_0xb4f62['textContent'];return{'question':_0xe2d95c,'answers':_0x3f8424,'correctAnswer':_0x2a42b9};}function addEventForAllElement(){var _0x4f495b=_0x30b72a,_0x402450=document[_0x4f495b(0x9b)](_0x4f495b(0xa9))[0x2];_0x402450[_0x4f495b(0x9b)]('tr')['forEach'](_0x23f60f=>{var _0x3280b4=_0x4f495b;_0x23f60f['addEventListener'](_0x3280b4(0x8c),function(_0x35efd6){var _0x250efb=_0x3280b4;_0x35efd6=_0x35efd6||window['event'];var _0x25eb43=_0x35efd6['target']||_0x35efd6['srcElement'],_0x3fbd8a=_0x25eb43[_0x250efb(0x81)]||_0x25eb43[_0x250efb(0xb6)],_0x2798e5='',_0x2bd131=this,_0x511b6d=_0x2bd131[_0x250efb(0x8e)],_0x3bbbee=Array[_0x250efb(0x85)][_0x250efb(0x93)][_0x250efb(0xa6)](_0x511b6d[_0x250efb(0xba)],_0x2bd131);_0x3bbbee%0x5===0x0?_0x2798e5=getAnswer(_0x3fbd8a,_0x3bbbee):_0x2798e5=getQuestion(_0x3fbd8a),isShowAnswer&&showAnswer(_0x25eb43,_0x2798e5);},![]);});}function chiaLayNguyen(_0x5e76d6,_0x57c47e){return(_0x5e76d6-_0x5e76d6%_0x57c47e)/_0x57c47e;}function getPosition(_0x835b6a){switch(_0x835b6a){case 0x0:return'A';case 0x1:return'B';case 0x2:return'C';case 0x3:return'D';}}