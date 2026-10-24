import { LiaSkatingSolid} from "react-icons/lia";
import { FaSkating, } from "react-icons/fa";
import { FaPersonSkating } from "react-icons/fa6";
import { MdIceSkating, MdOutlineRollerSkating } from "react-icons/md"
import { TbRollerSkating } from "react-icons/tb";


const logos = [
  { Icon: LiaSkatingSolid, name: "Skating" },
  { Icon: FaSkating, name: "Skater" },
  {Icon: FaPersonSkating, name: "skate"},
  {Icon: MdIceSkating, name: "mdSkate"},
  {Icon: MdOutlineRollerSkating, name: "outSkate"},
  {Icon: TbRollerSkating, name: "RolerSkate"}
];

function PartnersLogo() {
  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-12 motion-reduce:animate-none ">
        {[...logos, ...logos].map(({ Icon }, i) => (
          <Icon key={i} size={30} className="text-slate-300" />
        ))}
      </div>
    </div>
  );
}
export default PartnersLogo