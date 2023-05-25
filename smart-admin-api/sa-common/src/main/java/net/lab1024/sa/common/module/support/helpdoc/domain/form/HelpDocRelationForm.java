package net.lab1024.sa.common.module.support.helpdoc.domain.form;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * 帮助文档 关联项目
 *
 * @Author 曾
 * @Date 2023-05-21 22:34:00 
 * @Wechat 
 * @Email 739224682@qq.com 
 * @Copyright 
 */
@Data
public class HelpDocRelationForm {

    @ApiModelProperty("关联名称")
    @NotBlank(message = "关联名称不能为空")
    private String relationName;

    @ApiModelProperty("关联id")
    @NotNull(message = "关联id不能为空")
    private Long relationId;
}
