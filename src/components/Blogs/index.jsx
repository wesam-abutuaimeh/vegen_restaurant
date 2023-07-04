import { Component } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import Image from "../Image";
import blog from "../../mock/blog";
import "./style.css"

class Blog extends Component {
    render() {
        return <div className="blog__container">
            <Container>
                <SectionHeader header="Blogs" subHeader="words from our food lovers" className="center" />
                <div className="articles__container">
                    {blog.map((article, index) => {
                        return <div className="article" key={article.id} style={index === 1 ? { flexDirection: "column-reverse" } : null}>
                            <Image src={article.img} alt="Image" title="Image" />
                            <div className="article__header">
                                <p className="article__title">{article.title}</p>
                                <span className="article__sub__title">{article.subTitle}</span>
                                <a href="google.com" className="read__more__btn">Read more</a>
                            </div>
                        </div>
                    })}
                </div>
            </Container>
        </div>;
    }
}

export default Blog;
