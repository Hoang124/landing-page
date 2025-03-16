import Image from "next/image";
import Infor from "public/assets/infor.svg";

interface IBanner {
    tag: string,
    title: string,
    subTitle: string,
    btnText: string,
    imgSrc: string,
    description: string,
    backgroudColor: string,
}

interface IProps {
    banner: IBanner;
}

const Banner = (props: IProps) => {
    const { banner } = props;

    return (
        <div className="banner banner-rotate"
            style={{ background: banner.backgroudColor }}>
            {/* Left Content */}
            <div className="content-left">
                <span className="banner-tag">
                    {banner.tag}
                </span>
                <div className="max-w-lg">
                    <h2 className="banner-title">{banner.title}</h2>
                    <p className="banner-subtitle">{banner.subTitle}</p>
                </div>
                <button className="banner-btn">
                    {banner.btnText}
                </button>
            </div>

            {/* Right Image */}
            <div className="content-right -mt-10">
                <Infor className='banner-info' />
                <Image
                    src={banner.imgSrc}
                    alt="Banner"
                    fill
                />
            </div>
        </div>
    );
}
export default Banner;