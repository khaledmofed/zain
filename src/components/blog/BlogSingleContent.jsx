"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link as NextIntlLink } from '@/i18n/routing';
import SocialShare from '../utilities/SocialShare';
import BlogCommentForm from '../form/BlogCommentForm';
import BlogPostComments from './BlogPostComments';
import team1Thumb from '@/assets/img/teams/waleed1.webp'
import Animate from '../animation/Animate';
import blogData from '@/assets/jsonData/blog/BlogData.json';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BlogSingleContent = ({ blogInfo, totalBlogs }) => {
    const t = useTranslations('blogSingle');
    const tBlog = useTranslations('blog');
    const locale = useLocale();
    const isRTL = locale === 'ar';
    const { id, date, dateIcon, thumbFull, authorIcon, author } = blogInfo || {};

    // Blogs Navigation
    const currentId = id ? parseInt(id.toString(), 10) : 1;

    // Calculate the previous and next IDs dynamically
    const previousId = currentId === 1 ? totalBlogs : currentId - 1;
    const nextId = currentId === totalBlogs ? 1 : currentId + 1;

    // Get the previous and next blog titles
    const previousBlog = blogData.find((blog) => blog.id === previousId);
    const nextBlog = blogData.find((blog) => blog.id === nextId);

    // Get translated titles for navigation
    const getTranslatedTitle = (blog) => {
        if (!blog) return t('noTitle');
        const key = String(blog.id);
        try {
            return tBlog(`items.${key}.title`);
        } catch {
            return blog.title || t('noTitle');
        }
    };

    const getFirstTwoWords = (blog) => {
        const title = getTranslatedTitle(blog);
        return title?.split(' ').slice(0, 2).join(' ') || t('noTitle');
    };

    // Get translated content for current blog
    const key = String(id);
    let content = null;
    try {
        content = t.raw(`items.${key}`);
    } catch {
        // fallback
    }

    // Get translated author
    let translatedAuthor = author;
    try {
        translatedAuthor = tBlog(`items.${key}.author`);
    } catch {
        // fallback
    }

    return (
        <>
            <div className="blog-area single full-blog full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">

                            <Animate className="animate__animated animate__fadeInUp">
                                <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                                    <div className="blog-style-two item">
                                        <div className="blog-item-box">
                                            <div className="thumb">
                                                <Link href="#" scroll={false}><Image src={`/assets/img/blog/${thumbFull}`} width={1900} height={995} alt="Thumb" /></Link>
                                            </div>
                                            <div className="info">
                                                <div className="meta">
                                                    <ul>
                                                        <li>
                                                            <Link href="#"><i className={dateIcon}></i> {date}</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"><i className={authorIcon}></i> {translatedAuthor}</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {content ? (
                                                    <>
                                                        <p>{content.paragraph1}</p>
                                                        <p>{content.paragraph2}</p>
                                                        <blockquote>{content.blockquote}</blockquote>
                                                        <p>{content.paragraph3}</p>
                                                        <h3>{content.heading}</h3>
                                                        <ul>
                                                            {content.listItems?.map((item, index) => (
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                        </ul>
                                                        <p>{content.paragraph4}</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <p>
                                                            Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
                                                        </p>
                                                        <p>
                                                            New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                                        </p>
                                                        <blockquote>
                                                            Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.
                                                        </blockquote>
                                                        <p>
                                                            Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                                        </p>
                                                        <h3>Conduct replied off led whether?</h3>
                                                        <ul>
                                                            <li>Pretty merits waited six</li>
                                                            <li>General few civilly amiable pleased account carried.</li>
                                                            <li>Continue indulged speaking</li>
                                                            <li>Narrow formal length my highly</li>
                                                            <li>Occasional pianoforte alteration unaffected impossible</li>
                                                        </ul>
                                                        <p>
                                                            Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-author">
                                        <div className="thumb">
                                            <Image src={team1Thumb} alt="Thumb" />
                                        </div>
                                        <div className="info">
                                            <h4><Link href="#" scroll={false}>{t('postAuthor.name')}</Link></h4>
                                            <p>{t('postAuthor.description')}</p>
                                        </div>
                                    </div>

                                    <div className="post-tags share">
                                        <div className="tags">
                                            <h4>{t('tags')} </h4>
                                            <Link href="#" onClick={handleSmoothScroll}>{isRTL ? 'التحول الرقمي' : 'Digital Transformation'}</Link>
                                            <Link href="#" onClick={handleSmoothScroll}>{isRTL ? 'البنية التحتية' : 'Infrastructure'}</Link>
                                        </div>
                                        <div className="social">
                                            <h4>{t('share')}</h4>
                                            <ul>
                                                <SocialShare />
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Post Pagination */}
                                    <div className="post-pagi-area">
                                        <div className="post-previous">
                                            <NextIntlLink href={`/blog-single/${previousId}`}>
                                                <div className="icon"><i className={isRTL ? "fas fa-angle-double-right" : "fas fa-angle-double-left"}></i></div>
                                                <div className="nav-title"> {t('previousPost')} <h5>{getFirstTwoWords(previousBlog)}</h5></div>
                                            </NextIntlLink>
                                        </div>
                                        <div className="post-next">
                                            <NextIntlLink href={`/blog-single/${nextId}`}>
                                                <div className="nav-title">{t('nextPost')} <h5>{getFirstTwoWords(nextBlog)}</h5></div>
                                                <div className="icon"><i className={isRTL ? "fas fa-angle-double-left" : "fas fa-angle-double-right"}></i></div>
                                            </NextIntlLink>
                                        </div>
                                    </div>

                                    {/* <div className="blog-comments">
                                        <div className="comments-area">
                                            <div className="comments-title">
                                                <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                                <BlogPostComments />
                                            </div>
                                            <div className="comments-form">
                                                <div className="title">
                                                    <h3>Leave a comments</h3>
                                                </div>
                                                <BlogCommentForm />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </Animate>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleContent;