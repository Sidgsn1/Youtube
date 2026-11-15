

import React from 'react'
import Comments from './Comment'


const commentsData = [
  {
    id: 1,
    channelName: "CodeWithHarry",
    comment: "Amazing explanation! React concepts are finally making sense.",
    replies: [
      {
        id: 101,
        channelName: "Rahul Sharma",
        comment: "True! His explanations are really easy to understand.",
        replies: [
          {
            id: 1001,
            channelName: "Aman Verma",
            comment: "Especially the examples make everything clear.",
            replies: [
              {
                id: 10001,
                channelName: "Rahul Sharma",
                comment: "Exactly bro! Practical examples are the best.",
                replies: []
              }
            ]
          }
        ]
      },
      {
        id: 102,
        channelName: "Priya Singh",
        comment: "Can you recommend a good React project for beginners?",
        replies: [
          {
            id: 103,
            channelName: "CodeWithHarry",
            comment: "Try building a YouTube clone or a food ordering app.",
            replies: [
              {
                id: 104,
                channelName: "Priya Singh",
                comment: "Thanks! I'll definitely try the YouTube clone.",
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    channelName: "TechWithTim",
    comment: "The useState and useEffect explanation was really helpful.",
    replies: [
      {
        id: 201,
        channelName: "Ankit Kumar",
        comment: "I was confused about useEffect dependencies.",
        replies: [
          {
            id: 202,
            channelName: "TechWithTim",
            comment: "Remember that dependencies control when the effect runs.",
            replies: []
          },
          {
            id: 203,
            channelName: "Ankit Kumar",
            comment: "Got it! Thanks for clearing that up.",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 3,
    channelName: "Siddharth",
    comment: "Building this project while learning React. Really enjoying it!",
    replies: [
      {
        id: 301,
        channelName: "FrontendDev",
        comment: "How long have you been learning React?",
        replies: [
          {
            id: 302,
            channelName: "Siddharth",
            comment: "Around 2 months. Still learning new things every day.",
            replies: [
              {
                id: 303,
                channelName: "FrontendDev",
                comment: "Keep building projects. That's the best way to learn.",
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    channelName: "Akash Yadav",
    comment: "Can you make a video on Redux Toolkit with a real-world example?",
    replies: [
      {
        id: 401,
        channelName: "ReactLearner",
        comment: "Yes please! Redux is confusing initially.",
        replies: []
      },
      {
        id: 402,
        channelName: "DevCommunity",
        comment: "A shopping cart project would be perfect for this.",
        replies: [
          {
            id: 403,
            channelName: "Akash Yadav",
            comment: "Agreed! That would cover most Redux concepts.",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 5,
    channelName: "Neha Sharma",
    comment: "Loved the video! Waiting for the next part.",
    replies: []
  }
];


const CommentsList = ({data})=>{

    return data.map((comment)=>(
        <div key={comment.id}>
            <Comments data={comment}/>
            <div className='pl-5 border-l-2 ml-5'>
                {comment.replies.length>0 && (<CommentsList data={comment.replies} />)
                }
            </div>
        </div>
        ))

}

const CommentsContainer = () => {

  return (
    <div className='text-white mt-5'>
        <h1 className='text-bold text-2xl border-b-2'>Comments:</h1>
        <CommentsList data={commentsData}/>
    </div>
  )
}

export default CommentsContainer