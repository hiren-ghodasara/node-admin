const AdminBro = require('admin-bro')
const path = require('path')
const uploadFeature = require('@admin-bro/upload')
const { User, Company, Settings, Categories, CardImage ,Logo} = require('../models')
const { UserResource, CompanyResource, CategoriesResource, CardResource,LogoResource } = require('./resources')

const sidebarGroups = {
  user: {
    name: 'User Management',
    icon: 'User',
  },
  app: {
    name: 'App Management',
    icon: 'Product',
  },
}
const { BaseProvider } = require('@admin-bro/upload')

class MyProvider extends BaseProvider {
  constructor() {
    // it requires bucket as a parameter to properly pass it to other methods
    super(path.join(__dirname, '../public/categories'))
  }
  // your implementation goes here
}

const provider = new MyProvider()

const adminBro = new AdminBro({
  rootPath: '/admin',
  loginPath: '/admin/login',
  resources: [
    {
      resource: User,
      options: {
        ...UserResource,
        parent: sidebarGroups.user,
      },
    },
    {
      resource: Company,
      options: {
        ...CompanyResource,
        parent: sidebarGroups.user,
      },
    },
    {
      resource: Settings,
      options: {
        parent: sidebarGroups.app,
      },
    },
    {
      resource: Categories,
      options: {
        ...CategoriesResource,
        parent: sidebarGroups.app,
      },
      features: [
        uploadFeature({
          // provider: provider,
          provider: { local: { bucket: path.join(__dirname, '../public/categories') } },
          properties: {
            key: 'images', // to this db field feature will safe S3 key
            //filePath: 'imagePaths'
            //mimeType: 'mimeType', // this property is important because allows to have previews
          },
          validation: {
            mimeTypes: ['image/jpeg', 'image/png'],
          },
        }),
      ],
    },
    {
      resource: CardImage,
      options: {
        ...CardResource,
        parent: sidebarGroups.app,
      },
      features: [
        uploadFeature({
          // provider: provider,
          provider: { local: { bucket: path.join(__dirname, '../public/card_image') } },
          multiple: true,
          properties: {
            key: 'images', // to this db field feature will safe S3 key
            //filePath: 'imagePaths'
            //mimeType: 'mimeType', // this property is important because allows to have previews
          },
          validation: {
            mimeTypes: ['image/jpeg', 'image/png'],
          },
        }),
      ],
    },
    {
      resource: Logo,
      options: {
        ...LogoResource,
        parent: sidebarGroups.app,
      },
      features: [
        uploadFeature({
          // provider: provider,
          provider: { local: { bucket: path.join(__dirname, '../public/logos') } },
          multiple: true,
          properties: {
            key: 'images', // to this db field feature will safe S3 key
            //filePath: 'imagePaths'
            //mimeType: 'mimeType', // this property is important because allows to have previews
          },
          validation: {
            mimeTypes: ['image/jpeg', 'image/png'],
          },
        }),
      ],
    },
  ],
  branding: {
    companyName: 'AdminBro Tutorial',
    softwareBrothers: false,
  },
})

module.exports = adminBro
