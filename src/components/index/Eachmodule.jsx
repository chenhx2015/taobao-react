import React from "react";
import { Link } from "react-router-dom";
import { basic_url } from "../../env";
const SectionItem = ({ price, num, intro, imgurl, id }) => (
  <li>
    <Link to={"/products/" + id}>
      <img src={basic_url + imgurl} alt="" />
    </Link>
  </li>
);

const ModuleSection = (className, tipClass, title) => ({ list = [] }) => (
  <div className={className}>
    <span className={tipClass}>{title}</span>
    {list.map(item => (
      <SectionItem
        key={item.id}
        imgurl={item.imgurl}
        intro={item.intro}
        price={item.price}
        num={item.num}
        key={item.id}
        id={item.id}
      />
    ))}
  </div>
);

const FashItems = ModuleSection("fashionItem", "fashionTip", "时尚大咖");
const CheapGoods = ModuleSection("fashionItem", "salegoodTip", "实惠好货");
const AllGoods = ModuleSection("fashionItem", "allgoodTip", "买遍全球");

export default ({ fashions, cheaps, globals }) => (
  <div className="eachModule">
    {/* 时尚大咖 */}
    <FashItems list={fashions} />
    {/* 实惠好货 */}
    <CheapGoods list={cheaps} />
    {/* <li><Link to="/"><img src='%PUBLIC_URL%/images/index/icon-module-2.png' alt=""/></Link></li> */}
    {/* 买遍全球 */}
    <AllGoods list={globals} />
  </div>
);
