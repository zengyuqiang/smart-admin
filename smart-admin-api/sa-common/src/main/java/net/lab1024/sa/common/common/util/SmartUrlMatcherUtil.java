package net.lab1024.sa.common.common.util;

import com.google.common.collect.Lists;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.CollectionUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author 罗伊
 * @description:
 * @date 2022/11/25 9:32 上午
 */
public class SmartUrlMatcherUtil {


    /**
     *  当前请求是与urlPatterns中的匹配
     * @param urlPatterns
     * @param request
     * @return
     */
    public static Boolean contain(List<String> urlPatterns, HttpServletRequest request) {
        if (CollectionUtils.isEmpty(urlPatterns)) {
            return false;
        }
        String uri = request.getRequestURI();
        for (String urlPattern : urlPatterns) {
            AntPathMatcher antPathMatcher = new AntPathMatcher();
            boolean match = antPathMatcher.match(urlPattern, uri);
            if (match) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        List<String> ignoreUrlList = Lists.newArrayList();
        ignoreUrlList.add("/swagger-ui.html");
        ignoreUrlList.add("/swagger-resources/**");
        ignoreUrlList.add("/*/api-docs");

        String uri = "/v2/api-docs?group=Admin";
        for (String urlPattern : ignoreUrlList) {
            AntPathMatcher antPathMatcher = new AntPathMatcher();
            boolean match = antPathMatcher.match(urlPattern, uri);
            if (match) {
                System.out.println(true);
            }
        }


    }
}