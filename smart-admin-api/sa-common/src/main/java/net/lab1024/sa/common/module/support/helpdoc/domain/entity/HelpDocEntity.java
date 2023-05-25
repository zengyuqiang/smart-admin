package net.lab1024.sa.common.module.support.helpdoc.domain.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * 帮助文档
 *
 * @Author 曾
 * @Date 2023-05-21 22:34:00 
 * @Wechat 
 * @Email 739224682@qq.com 
 * @Copyright 
 */
@Data
@TableName("t_help_doc")
public class HelpDocEntity {

    @TableId(type = IdType.AUTO)
    private Long helpDocId;

    /**
     * 类型
     */
    private Long helpDocCatalogId;

    /**
     * 标题
     */
    private String title;

    /**
     * 内容 纯文本
     */
    private String contentText;

    /**
     * 内容 html
     */
    private String contentHtml;

    /**
     * 附件
     * 多个英文逗号分隔
     */
    private String attachment;

    /**
     * 排序
     */
    @TableField("`sort`")
    private Integer sort;

    /**
     * 页面浏览量
     */
    private Integer pageViewCount;

    /**
     * 用户浏览量
     */
    private Integer userViewCount;

    /**
     * 作者
     */
    private String author;

    private LocalDateTime updateTime;

    private LocalDateTime createTime;
}
