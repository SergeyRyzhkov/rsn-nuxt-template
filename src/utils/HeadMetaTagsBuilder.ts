import { HeadMetaTagInfo } from '@/models/core/HeadMetaTagInfo'
import { AppConfig } from '@/AppConfig'

export class HeadMetaTagsBuilder {

  public createHead (headMetaTagInfo?: HeadMetaTagInfo) {
    headMetaTagInfo = this.normilizeSeoMetaObject(headMetaTagInfo)
    return {
      title: headMetaTagInfo.title,
      description: headMetaTagInfo.description,
      keywords: headMetaTagInfo.keywords,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: headMetaTagInfo.fullPath,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: headMetaTagInfo.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: headMetaTagInfo.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: headMetaTagInfo.image,
        },
        {
          hid: 'description',
          name: 'description',
          content: headMetaTagInfo.description,
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          keywords: headMetaTagInfo.keywords,
        },
      ],
    }
  }

  private normilizeSeoMetaObject (
    headMetaTagInfo?: HeadMetaTagInfo
  ): HeadMetaTagInfo {
    const normSeoMeta = !!headMetaTagInfo
      ? headMetaTagInfo
      : new HeadMetaTagInfo()
    normSeoMeta.description = !!normSeoMeta.description
      ? normSeoMeta.description
      : AppConfig.defaultMetaDescription
    normSeoMeta.title = !!normSeoMeta.title
      ? normSeoMeta.title
      : AppConfig.defaulMetaTitle
    normSeoMeta.image = !!normSeoMeta.image
      ? normSeoMeta.image
      : AppConfig.defaulMetaImgSrc
    normSeoMeta.keywords = !!normSeoMeta.keywords
      ? normSeoMeta.keywords
      : AppConfig.defaultMetaDescription
    return normSeoMeta
  }
}
