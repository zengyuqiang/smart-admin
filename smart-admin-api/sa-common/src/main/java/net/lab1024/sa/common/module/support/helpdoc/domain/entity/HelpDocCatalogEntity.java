package net.lab1024.sa.common.module.support.helpdoc.domain.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 帮助文档的 类型
 *
 * @Author 曾
 * @Date 2023-05-21 22:34:00 
 * @Wechat 
 * @Email 739224682@qq.com 
 * @Copyright 
 */
@Data
@TableName("t_help_doc_catalog")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HelpDocCatalogEntity {

    @TableId(type = IdType.AUTO)
    private Long helpDocCatalogId;

    /**
     * 名称
     */
    private String name;

    /**
     * 父id
     */
    private Long parentId;

    /**
     * 排序
     */
    @TableField("`sort`")
    private Integer sort;


    private LocalDateTime updateTime;

    private LocalDateTime createTime;
}
