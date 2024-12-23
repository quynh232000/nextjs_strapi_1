## Cách làm giao diện

- Ưu tiên dùng giao diện của tailwindui, không nên tự code quá nhiều sẽ tốn thời gian và khó responsive
- Cứ cho giao diện chạy lên được rồi mới tính đến chuyện tối ưu

## Ngôn ngữ

- Có cả tiếng Anh và tiếng Việt cho mỗi text, define trực tiếp bên trong component rồi tính sau, chưa cần tạo file mới.
- Nếu component nào chưa có trong common thì có thể copy toàn bộ UI của cục đó trong tailwindUI a sẽ viết sau.

## Common

- user/src/components/atoms
- user/src/components/molecules

## Tạo nhánh git:

Do đang sử dụng extension git flow, tính năng đang làm gọi là feature/, nên tạo branch mới bằng lệnh:
git flow feature start <feature_branch>
feature_branch chính là tên branch muốn tạo
ví dụ làm mới 1 page tên là partner, chạy lệnh:
git flow feature start partner-page
thì nhánh feature/partner-page sẽ được tạo

## Trước khi commit

- npm run build để format và build xem có lỗi không, có thể khi chạy lệnh này code sẽ được format lại, và đem code đã được format commit lên luôn
- merge develop về nhánh của mình mà resolve conflict(nếu có) ở nhánh mình

## Commit

- Commit nhớ comment theo format: [name]\_nội dung
- Vào trang github tạo merge request
