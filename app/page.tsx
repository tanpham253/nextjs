import MyProfile from "./component/ui/MyProfile";

export default function Home() {
  return (
    <>
    <h1>hello world</h1>
    <MyProfile />
    <h2>local image</h2>
    <img src="/images/local.jpg" width={200} height={200}/>
    <h2>online image</h2>
    <img src="https://cdn.tgdd.vn/Products/Images/42/329959/vivo-v40-lite-tim-thumb-600x600.jpg" width={200} height={200}/>
    </>
  );
}
