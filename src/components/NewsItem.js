import React from 'react'

export default function NewsItem(props) {

  let {title, desc, imgurl, url, date, author} = props

  return (
    <div>
      <div className="card">
          <img src={imgurl?imgurl:"https://s.abcnews.com/images/US/spacex-starship-ap-jt-230415_1681580199064_hpMain_16x9_992.jpg"} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" >{desc}</p>
            <p className="card-text" >On {date} by <b> {author?author:"Unknown"}</b> </p>
            <a href={url} rel="noreferrer" target="_blank" className='btn btn-sm btn-primary'>Read More</a>
          </div>
        </div>
    </div>
  )
}
