// Shared components injected by JS
const SITE_NAME = 'MANN<span>HAUS</span>';

function getNavHTML(activePage = '') {
  const pages = [
    { href: '../index.html', label: 'Trang Chủ' },
    { href: 'san-pham.html', label: 'Sản Phẩm' },
    { href: 'bo-suu-tap.html', label: 'Bộ Sưu Tập' },
    { href: 'khuyen-mai.html', label: 'Khuyến Mãi' },
    { href: 'blog.html', label: 'Blog' },
    { href: 'lien-he.html', label: 'Liên Hệ' },
  ];

  const links = pages.map(p => {
    const active = p.label === activePage ? ' class="active"' : '';
    return `<a href="${p.href}"${active}>${p.label}</a>`;
  }).join('');

  return `
  <div class="topbar">🚚 Miễn phí vận chuyển cho đơn hàng trên 500.000₫ &nbsp;|&nbsp; Đổi trả miễn phí trong 30 ngày</div>
  <nav class="navbar">
    <a href="../index.html" class="navbar-logo">MANN<span>HAUS</span></a>
    <div class="navbar-nav">${links}</div>
    <div class="navbar-actions">
      <a href="tim-kiem.html">🔍 Tìm Kiếm</a>
      <a href="yeu-thich.html">♡ Yêu Thích</a>
      <a href="gio-hang.html">🛍 Giỏ Hàng <span class="cart-badge" style="display:none">0</span></a>
      <a href="tai-khoan.html">👤 Tài Khoản</a>
    </div>
  </nav>`;
}

function getFooterHTML() {
  return `
  <div class="promo-strip">
    <div class="promo-strip-item">
      <div class="promo-strip-icon">🚚</div>
      <div>
        <div class="promo-strip-title">Miễn Phí Vận Chuyển</div>
        <div class="promo-strip-text">Cho đơn hàng từ 500.000₫</div>
      </div>
    </div>
    <div class="promo-strip-item">
      <div class="promo-strip-icon">↩</div>
      <div>
        <div class="promo-strip-title">Đổi Trả 30 Ngày</div>
        <div class="promo-strip-text">Không cần lý do</div>
      </div>
    </div>
    <div class="promo-strip-item">
      <div class="promo-strip-icon">🔒</div>
      <div>
        <div class="promo-strip-title">Thanh Toán Bảo Mật</div>
        <div class="promo-strip-text">Nhiều phương thức thanh toán</div>
      </div>
    </div>
  </div>
  <div class="newsletter-section">
    <div class="tag-label">Nhận Ưu Đãi Độc Quyền</div>
    <h3 class="newsletter-title">Đăng Ký Nhận Bản Tin</h3>
    <p class="newsletter-desc">Nhận thông báo về bộ sưu tập mới, ưu đãi độc quyền và xu hướng thời trang nam mới nhất</p>
    <form class="newsletter-form">
      <input type="email" placeholder="Nhập địa chỉ email của bạn..." required>
      <button type="submit">Đăng Ký</button>
    </form>
  </div>
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <div class="footer-brand-name">MANN<span>HAUS</span></div>
        <p class="footer-desc">Thương hiệu thời trang nam cao cấp, kết hợp phong cách châu Âu với hơi thở Việt Nam. Chất lượng là cam kết, phong cách là ngôn ngữ.</p>
        <div class="footer-socials">
          <a class="footer-social" href="#">f</a>
          <a class="footer-social" href="#">in</a>
          <a class="footer-social" href="#">ig</a>
          <a class="footer-social" href="#">yt</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Danh Mục</div>
        <div class="footer-links">
          <a href="san-pham.html">Áo Thun &amp; Polo</a>
          <a href="san-pham.html">Sơ Mi</a>
          <a href="san-pham.html">Quần Tây</a>
          <a href="san-pham.html">Quần Jeans</a>
          <a href="san-pham.html">Áo Khoác</a>
          <a href="san-pham.html">Phụ Kiện</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Hỗ Trợ</div>
        <div class="footer-links">
          <a href="lien-he.html">Liên Hệ</a>
          <a href="huong-dan-size.html">Hướng Dẫn Size</a>
          <a href="chinh-sach.html">Chính Sách Đổi Trả</a>
          <a href="chinh-sach.html">Chính Sách Bảo Mật</a>
          <a href="blog.html">Blog Thời Trang</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Thông Tin</div>
        <div class="footer-links">
          <a href="ve-chung-toi.html">Về Chúng Tôi</a>
          <a href="#">Tuyển Dụng</a>
          <a href="#">Nhượng Quyền</a>
          <a href="#">Chương Trình Thành Viên</a>
        </div>
        <div style="margin-top:20px; font-size:12px; color:rgba(255,255,255,0.3);">
          📍 123 Đường Lê Lợi, Q.1, TP.HCM<br>
          📞 1800 1234 (miễn phí)<br>
          ✉ hello@mannhaus.vn
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 MANNHAUS. Bảo lưu mọi quyền.</span>
      <span>Thiết kế bởi sinh viên — Dự án kết thúc môn</span>
    </div>
  </footer>`;
}
