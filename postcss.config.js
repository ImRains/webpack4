module.exports = {
    plugins:[
        require('autoprefixer')({
            "browsers": [
                "defaults",
                "not ie < 8",
                "last 2 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
        }) //自动补齐css前缀,需要自己配置浏览器，否则不生效
    ]
}