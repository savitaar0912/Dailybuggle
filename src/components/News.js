import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)


  // const updateNews = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0ff2b45bb2ef48658dce47372d5a3d41&page=${page}&pageSize=${props.pageSize}`;
  //   setloading(true)
  //   let data = await fetch(url);
  //   let parsedata = await data.json()
  //   setarticles(parsedata.articles)
  //   settotalResults(parsedata.totalResults)
  //   setloading(false)
  // }

  useEffect(() => {
    fetchMoreData();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0ff2b45bb2ef48658dce47372d5a3d41&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1)
    setloading(true)
    let data = await fetch(url);
    let parsedata = await data.json()
    setarticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
    setloading(false)
  }

  return (
    <>
      <h1 className="text-center" style={{marginTop: '65px'}}>DailyBuggle - Top Headlines</h1>
      {loading && <Spinner />}
      
      <InfiniteScroll
      style={{width: '100%' , objectFit: 'cover' , overflow:'hidden'}}
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((e) =>  {
              return <div className="col-md-4"  key={e.url}>
                <NewsItem title={e.title} desc={e.description} imgurl={e.urlToImage} url={e.url} date={e.publishedAt.slice(0, 10)} author={e.author} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: "us",
  pageSize: 9,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}