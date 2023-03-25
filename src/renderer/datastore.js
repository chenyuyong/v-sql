// eslint-disable-next-line
import Datastore from 'nedb'
// import path from 'path'
// eslint-disable-next-line
const path = require('path')
// eslint-disable-next-line
import { remote } from 'electron'
// const remote = require('@electron/remote')
// const { remote } = require('electron')

// export default new Datastore({
// 	autoload: true,
// 	filename: path.join(remote.app.getPath('userData'), '/test.db'),
// })

const db = new Datastore({
	autoload: true,
	filename: path.join(remote.app.getPath('userData'), '/test.db'),
})

console.log(db.find, 88888888888)

// db.find({}, function (err, docs) {
// 	console.log(docs)
// 	console.log(err)
// 	if (!err) {
// 		console.log(docs)
// 	}
// })

// 	console.log(docs)
// })
// // 插入数据
// db.insert({ name: 20, age: 100 }, function (err, doc) {
// 	if (err) {
// 		console.log(err)
// 		return
// 	}
// 	console.log(doc)
// })
// // 更新数据
// db.update(
// 	{ _id: 'cHODtJOIft1YcOMN' },
// 	{ $set: { name: '赵六' } },
// 	function (err, data) {
// 		if (err) {
// 			console.log(err)
// 			return
// 		}
// 		console.log(data)
// 	}
// )
// // 移除数据
// db.remove({ id: '6nAYPLImXRs7mB0P' }, {}, function (err, data) {
// 	if (err) {
// 		console.log(err)
// 		return
// 	}
// 	console.log(data)
// })
// export default {
// 	db,
// }
// console.log("datastore--",Datastore)
// var Datastore = require('nedb')

// console.log('datastore--')
