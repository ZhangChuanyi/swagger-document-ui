/**
 * http 接口初始化以及调用。
 */
import axios from 'axios';
import swagger from '@/utils/swagger';
import $ from '@/utils/$';

function initApi(paths, $root) {
    configAxios($root);
    if (!$.isArray(paths)) {
        paths = [paths];
    }
    const swaggerResources = [];
    axios
        .all(
            paths.map(url =>
                axios.get(url).catch(res => {
                    console.info(`[swagger-document-ui]: Can not get url '${url}', res: ` + res);
                })
            )
        )
        .then(function(results) {
            $.flatMap(results, function(it) {
                return it ? it.data : [];
            }).forEach(function(data) {
                swaggerResources.push(data);
            });

            $root.swaggerResources = swaggerResources;
            if (swaggerResources[0]) {
                const url = swaggerResources[0].url || swaggerResources[0].location;
                setCurrentSwaggerJson(url, $root);
            } else {
                console.warn('[swagger-document-ui]: Can not find url, swaggerResources: ' + swaggerResources);
                $root.$Notice.warning({
                    title: 'API 初始化错误',
                    desc: '未找到 API 地址',
                    duration: 10
                });
            }
        });
}

function setCurrentSwaggerJson(path, vue, onSuccess) {
    axios.get(path).then(function(swaggerResponse) {
        const data = swaggerResponse.data;
        let swaggerJson;
        if (typeof data === 'string') {
            try {
                swaggerJson = JSON.parse(data);
            } catch (e) {
                console.warn('[swagger-document-ui]: Parse swagger json error: ' + e);
                vue.$root.$Notice.error({
                    title: 'API 初始化错误',
                    desc: `path: ${path}\n${e.toLocaleString()}`,
                    duration: 10
                });
            }
        } else {
            swaggerJson = data;
        }
        onSuccess && onSuccess();
        vue.$root.currentSwaggerJson = swagger.fixSwaggerJson(swaggerJson);
    });
}

function configAxios($root) {
    const baseURL = getBaseURL();
    $root.baseURL = baseURL;
    axios.defaults.baseURL = baseURL;
    axios.defaults.timeout = 10000;
    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            const url = $.get(error, 'request.responseURL');
            if (
                url &&
                $.get(error, 'response.status') === 404 &&
                ($.endsWith(url, '/swagger-resources.json') || $.endsWith(url, '/swagger-resources'))
            ) {
                console.info(`[swagger-document-ui]: '${url}' 404`);
            } else {
                console.warn('[swagger-document-ui]: Ajax error: ' + error);
                $root.$Notice.error({
                    title: 'Error',
                    desc: error,
                    duration: 10
                });
            }

            return Promise.reject($.get(error, 'response.data'));
        }
    );
}

const getBaseURL = () => {
    const urlMatches = /(.*)\/swagger-ui.html.*/.exec(window.location.href);
    return urlMatches !== null ? urlMatches[1] : '/';
};
export default { initApi, setCurrentSwaggerJson };
