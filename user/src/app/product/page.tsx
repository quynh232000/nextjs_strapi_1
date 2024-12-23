'use client';
import { useCategories } from './services/category';

export default function ProductPage() {
  const x = useCategories();
  if (x.isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Product Page</h1>
      {/* <h1>Product Page</h1>
            Dụng cụ ăn uống (Ly Giấy + Tô Giấy + Đĩa giấy, + Ống Hút giấy/ cỏ…) + Dụng cụ bằng bã mía …
            Thùng carton
            Túi Giấy/ Túi Phân Hủy
            Xuất khẩu dừa trái ???
            Sản phẩm bằng mo cau
            —----------------
            Hàng tiêu dùng (FMCG)
            Paper products
            Ly Giấy (8oz; 12oz)
            Tô Giấy ('500ml; ..')
            Ống hút
            Sản phẩm nhựa tái chế
            Wooden products
            Kitchen products
            Others
            Green products
            Sp từ mo cau
            Sp từ tre/cỏ
            Sp từ dừa
            Chăn ra gối nệm
            Hoá mỹ phẩm (organic)
            Ready to eat products (Thực phẩm)
            Ready to cook products (Thực phẩm)

            Vật tư Xanh
            Gạch không nung
            Biomass
            Than trắng
            Gỗ lót ngoài trời ….

            Nông sản
            Nông sản tươi (sản phẩm gì ở đây : Dừa trái + Gừng …  .......)
            Nông sản khô

            Thủy - Hải sản
            Tôm;
            Cua;
            Sò;
            Cá */}
    </div>
  );
}
