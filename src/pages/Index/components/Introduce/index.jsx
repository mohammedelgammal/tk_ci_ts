import React from 'react'
import style from './index.module.less'
import groupStar from '@/assets/image/group_star.svg'
import groupInter from '@/assets/image/group_inter.svg'
import groupInter1 from '@/assets/image/sss1.svg'
import groupInter2 from '@/assets/image/sss2.svg'
import groupInter3 from '@/assets/image/sss3.svg'
import groupBg from '@/assets/image/group_bg.svg'
import groupBg2 from '@/assets/image/group_bg2.svg'
import { useTranslation } from 'react-i18next'


export default function Introduce() {
  const { t } = useTranslation()
  const list = [
    {
      title: t('introduce.discoverDApp'),
      text: t('introduce.discoverDAppDes'),
      src: groupInter1
    },
    {
      title: t('introduce.batchTransfer'),
      text: t('introduce.batchTransferDes'),
      src: groupInter2
    },
    {
      title: t('introduce.rapidFlashExchange'),
      text: t('introduce.rapidFlashExchangeDes'),
      src: groupInter3
    },
    {
      title: t('introduce.tRXVote'),
      text: t('introduce.tTRXVoteDes'),
      src: groupInter
    }
  ]
  return (
    <div className={style.introContainer}>
      <div className={style.title}>
        {t('introduce.title')}
      </div>
      <div className={style.subTitle}>
       {t('introduce.subTitle')}
      </div> 
      <div className={style.introList}>
        {list.map((item, index) => (
          <div className={style.introItem} key={index}>
            <div className={style.imageList}>
              <img src={groupBg} alt="" />
              <img src={groupBg2} alt="" />
              <img src={item.src} alt="" />
              <img src={groupStar} alt="" />
            </div>
            <p className={style.introItemTitle}>{item.title}</p>
           <div className={`${style.introInfo} mt-2 md:mt-4`}>{item.text}</div>

          </div>
        ))}
      </div>
    </div>
  )
}
