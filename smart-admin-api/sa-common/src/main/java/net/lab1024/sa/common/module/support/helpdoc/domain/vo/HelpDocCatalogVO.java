package net.lab1024.sa.common.module.support.helpdoc.domain.vo;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 帮助文档的 目录
 *
 * @Author 曾
 * @Date 2023-05-21 22:34:00 
 * @Wechat 
 * @Email 739224682@qq.com 
 * @Copyright 
 */
@Data
public class HelpDocCatalogVO {

    @ApiModelProperty("帮助文档目录id")
    private Long helpDocCatalogId;

    @ApiModelProperty("帮助文档目录-名称")
    private String name;

    @ApiModelProperty("帮助文档目录-父级id")
    private Long parentId;

    @ApiModelProperty("帮助文档目录-排序")
    private Integer sort;

}
