import Image from "next/image";
import Link from "next/link";

export default function Slidar({ title, imglink, content, bookLink }) {
    return (
        <div className=" bg-[#F2F2F2] m-0 p-0 ">
            <div className="hero-content p-3 grid md:grid-cols-2 justify-items-center ">
                {
                    imglink?.map((image, i) => (
                        <figure key={i} style={{
                            width: '90%',
                            height: '90%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image
                                width={350}
                                height={400}
                                src={image['data_url']}
                                alt="image"
                                style={{
                                    objectFit: 'contain',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }}
                            />
                        </figure>
                    ))
                }

                <div className="col-span-1">
                    <h1 className="text-4xl font-semibold">{title}</h1>
                    <p>
                        {content && (
                            <span dangerouslySetInnerHTML={{ __html: content }} />
                        )}
                    </p>
                    <Link href={bookLink} className="link link-info">See More</Link>
                </div>
            </div>
        </div>
    );
}